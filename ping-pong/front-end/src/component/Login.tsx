import React from 'react';

const onClick= () => {
	window.location.href = "http://localhost:3000/login/return";
}

function Login() {
  return (
	<>
		<button onClick={onClick}>Login</button>
	</>
  );
}

export default Login;