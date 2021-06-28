import "./Login.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const { username, password } = formData;
	const { handleLogin } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
    <form
      className="login-form"
			onSubmit={(e) => {
				e.preventDefault();
				handleLogin(formData);
			}}
		>
			<h3>Login</h3>
				<input
					type='text'
          name='username'
          placeholder="Username"
					value={username}
					onChange={handleChange}
				/>
			<br />
				<input
					type='password'
          name='password'
          placeholder="Password"
					value={password}
					onChange={handleChange}
				/>
      <br />
      <span>
        <button>Submit</button>
        <Link to='/register'>Register</Link>
      </span>
		</form>
	);
}

export default Login