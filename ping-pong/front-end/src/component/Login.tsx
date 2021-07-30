import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

function Login() {
	const [nickname, setNickname] = useState<string>('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value);
	}

	const  OAuth = () =>  {
		window.location.href = "http://localhost:3000/login/return";
		console.log("[OAuth] 42 Login");
	}

	const signIn = async() => {
		const cookies = new Cookies();

		//OAuth인증시 발급받은 토큰을 쿠키로 전달 받음
		const token = cookies.get('access_token');
		console.log(`[token] ${token}`);

		await axios({
			method: 'post',
			url: 'http://localhost:3000/login/signin',
			data: { token: token, nickname: nickname },
			headers: { 'Content-Type': 'application/json' },
		})
		.then( response => { console.log(response) } )
		.catch( error => { console.log(error) } );
	}

	return (
		<>
			<h1>로그인</h1>
			<input
			type="text"
			onChange={onChange}
			value={nickname}
			placeholder="닉네임을 입력해주세요"
			/>
			<button onClick={OAuth}>OAuth</button>
			<button onClick={signIn}>Login</button>
		</>
	);
}

export default Login;