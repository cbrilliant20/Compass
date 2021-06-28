import "./Register.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
		password: '',
	});
	const { username, email, password } = formData;
	const { handleRegister } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


  return (
    <form className="register-form"
    onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}
  >
    <h3>Register</h3>
    <input
      type='text'
        name='username'
        placeholder="Username"
      value={username}
      onChange={handleChange}
      />
    <br />
      <input
        type='text'
        name='email'
        placeholder="Email"
        value={email}
        onChange={handleChange}
        />
    <br/>
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
        <Link to='/login'>Login</Link>
        </span>
    </form>
    
  )
}

export default Register
