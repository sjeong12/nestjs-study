import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    user_idx: number;
	intra_id: string;
	nickname: string;
	avatar: string;
	status: number;
	second_auth: boolean;
	ladder_point: number;
	ladder_level: number;
}

function UserList() {
	const [users, setUsers] = useState<User[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
		  try {
			setError(null);
			setUsers(null);
			setLoading(true);
			const response = await axios.get(
			  'http://localhost:3000/user'
			);
			setUsers(response.data);
		  } catch (e) {
			setError(e);
		  }
		  setLoading(false);
		};
		fetchUsers();
	}, []);

	if (loading) return <div>로딩중..</div>;
	if (error) return <div>에러가 발생했습니다</div>;
	if (!users) return null;
	return (
		<>
			<h1>유저 목록</h1>
			<ul>
				{users.map(user => (
					<li key={user.user_idx}>
					{user.nickname} (인트라: {user.intra_id} / 접속상태: {user.status})
					</li>
				))}
			</ul>
		</>
	);
}

export default UserList;