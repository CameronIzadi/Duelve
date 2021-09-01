import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
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
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <div className="center">
        <h1>Login</h1>
        <div className='txt_field'>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
          </label>
      </div>
        <br />
        <div className="txt_field">
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
          </label>
        </div>
        <br />
        <button>Submit</button>
        <h3>Forgot Password?</h3>
      <Link to='/register'>Register</Link>
      </div>
    </form>
  );
}