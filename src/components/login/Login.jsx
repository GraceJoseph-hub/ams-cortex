import React, {useEffect, useState} from 'react'
import Input from '../globalComponents/Input';

const Login = ({ onSuccessfulLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const isFormValid =
      email !== "" &&
      password !== "" &&
      checkBox == true &&
      emailPattern.test(email);

    setCanSubmit(isFormValid);
  }, [email, password, checkBox]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const checkBoxHandler = (e) => {
    setCheckBox(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (canSubmit) {
      console.log("Login successful");
      onSuccessfulLogin();
    } else {
      console.log(
        "Cannot log in. Please check that all the fields are correctly filled."
      );
    }
    // const submitForm = canSubmit
    //   ? "Login successful"
    //   : "Cannot log in. Please check that all the fields are correctly filled.";

    // console.log(submitForm);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
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
      </form>
    </div>
  );
};

export default Login