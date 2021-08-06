import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import * as uuid from 'uuid';

interface Message {
	id: string;
	name: string;
	text: string;
}

interface Payload {
	name: string;
	text: string;
}

const socket = io('http://localhost:3000');

function Chat() {
	const [message, setMessage] = useState<string>('');
	const [chatList, setchatList] = useState<Message[]>([]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	}

	useEffect(() => {
		function receivedMessage(message: Payload) {
			const newMessage: Message = {
				id: uuid.v4(),
				name: message.name,
				text: message.text,
			};

			setchatList([...chatList, newMessage]);
		}

		socket.on('msgToClient', (message: Payload) => {
			receivedMessage(message);
		});
	}, [chatList, message]);

	const sendMessage = () => {
		const req: Payload = {
			name: 'sujlee',
			text: message,
		};
		socket.emit('msgToServer', req);
		setMessage('');
	}

	return (
		<>
			<h1>채팅</h1>
			<ul>
				{chatList.map(message => (
					message.name === 'sujlee' ? (
						<div className="message my-message" key={message.id}>
							<span>
								{message.name}
								{' diz:'}
							</span>
							<p>{message.text}</p>
						</div>
					):(
						<div className="message other-message" key={message.id}>
							<span>
								{message.name}
								{' diz:'}
							</span>
							<p>{message.text}</p>
						</div>
					)
				))}
			</ul>
			<input
			type="text"
			onChange={onChange}
			value={message}
			/>
			<button onClick={sendMessage}>send</button>
		</>
	);
}

export default Chat;