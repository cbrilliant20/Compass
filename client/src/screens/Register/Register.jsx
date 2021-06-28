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
      value={username}
      onChange={handleChange}
      />
    <br />
      <input
        type='text'
        name='email'
        value={email}
        onChange={handleChange}
        />
    <br/>
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
    <br />
        <button>Submit</button>
        <Link to='/login'>Login</Link>
    </form>
    
  )
}

export default Register
