import React, {useEffect, useState} from 'react'
import Input from '../globalComponents/Input';
import { useNavigate } from 'react-router-dom';


const Login = ({ onRegister }) => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // useEffect for validation of our states
  useEffect(() => {
    const isFormValid =
      email !== "" &&
      password !== "" &&
      checkBox == true &&
      emailPattern.test(email);

    setCanSubmit(isFormValid);
  }, [email, password, checkBox]);

  // To get user's value (email)
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  // To get user's value (password)
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const checkBoxHandler = (e) => {
    setCheckBox(e.target.checked);
  };

  // Submits the form
  const submitHandler = (e) => {
    e.preventDefault();

    if (canSubmit) {
      navigate('/dashboard');
    } else {
      console.log(
        "Cannot log in. Please check that all the fields are correctly filled."
      );
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="text-red-500 italic">
          <p>If you're visiting for the first time, Kindly type in an email</p>
          <p>and a fake password and you'll be logged in to your dashboard.</p>
        </div>
        <h2 className="font-bold text-2xl">Account Login</h2>
        <div className="text-gray-400 text-sm">
          <p>If you are already a member, you can login with</p>
          <p>your email address and password.</p>
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            onChange={emailHandler}
            value={email}
          />

          <div className="flex flex-col">
            <Input
              label="Password"
              type="password"
              onChange={passwordHandler}
              value={password}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <input
            type="checkbox"
            onChange={checkBoxHandler}
            checked={checkBox}
          />
          <label htmlFor="">Remember me</label>
        </div>

        <button className="border py-1 rounded-md bg-blue-500 text-white">
          Sign in
        </button>
        <p>
          Don't have and Account?{" "}
          <span
            onClick={onRegister}
            className="text-blue-500 cursor-pointer"
          >
            register
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login