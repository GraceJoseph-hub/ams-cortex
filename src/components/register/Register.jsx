import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../globalComponents/Input'
import greenCheck from '../icons/greenCheck.svg'
import redError from '../icons/rederror.svg'

const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[!@#$%^&*()_+{}\]:;<>,.?~\\-]/;

const Register = () => {
  const navigate = useNavigate()
  const [busName, setBusName] = useState('');
  const [numOfEmployee, setNumOfEmployee] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [canProceed, setCanProceed] = useState(false);

  const [isTenCharacter, setIsTenCharacter] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSpecialCharacters, setIsSpecialCharacters] = useState(false);

  useEffect(() => {
   busName !== '' && numOfEmployee !== '' && password !== '' && confirmPwd !== '' && password === confirmPwd
      ? setCanProceed(true)
      : setCanProceed(false);
  }, [busName, numOfEmployee, password, confirmPwd]);

  const busNameHandler = (event) => {
    setBusName(event.target.value)
  }

  const numOfEmployeeHandler = (event) => {
    setNumOfEmployee(event.target.value)
  }
  const passwordHandler = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const isTenCharacter = newPassword.length >= 10;
    const isLowerCase = lowercaseRegex.test(newPassword);
    const isUpperCase = uppercaseRegex.test(newPassword);
    const isNumbers = numberRegex.test(newPassword);
    const isSpecialCharacters = specialCharRegex.test(newPassword);

    setIsTenCharacter(isTenCharacter);
    setIsLowerCase(isLowerCase);
    setIsUpperCase(isUpperCase);
    setIsNumbers(isNumbers);
    setIsSpecialCharacters(isSpecialCharacters);
  };

  const confirmPwdHandler = (event) => {
    setConfirmPwd(event.target.value);
  };

  // Submit form
  const submitFormHandler = (event) => {
    event.preventDefault()

    if (canProceed) {
      navigate("/dashboard");
    } else {
      console.log(
        "Cannot log in. Please check that all the fields are correctly filled."
      );
    }
  }
  
  return (
    <form onSubmit={submitFormHandler} className="flex flex-col gap-3">
      <p
        className="absolute top-2 left-10 cursor-pointer text-blue-500"
        onClick={() => navigate("/")}
      >
        Back
      </p>
      <h2 className="font-bold text-2xl">Register</h2>
      <Input
        label="Business Name"
        type="text"
        onChange={busNameHandler}
        value={busName}
        className="w-[26.25rem]"
      />
      <Input
        label="Number of Employee"
        type="number"
        onChange={numOfEmployeeHandler}
        value={numOfEmployee}
      />
      <Input
        label="Create Password"
        type="password"
        onChange={passwordHandler}
        value={password}
      />
      <Input
        label="Confirm password"
        type="password"
        onChange={confirmPwdHandler}
        value={confirmPwd}
      />
      <button className="border py-1 rounded-md bg-blue-500 text-white">
        Proceed
      </button>

      <h2 className='font-bold'>Password must contain :</h2>
      <div className='flex gap-3 mb-0'>
        <img src={isTenCharacter ? greenCheck : redError} alt="" />
        <span>At least 10 characters</span>
      </div>
      <div className='flex gap-3 mt-[-8px]'>
        <img src={isLowerCase ? greenCheck : redError} alt="" />
        <span>Lower case letters (a-z)</span>
      </div>
      <div className='flex gap-3 mt-[-8px]'>
        <img src={isUpperCase ? greenCheck : redError} alt="" />
        <span>Upper case letters (A-Z)</span>
      </div>
      <div className='flex gap-3 mt-[-8px]'>
        <img src={isNumbers ? greenCheck : redError} alt="" />
        <span>Numbers (0-9)</span>
      </div>
      <div className='flex gap-3 mt-[-8px]'>
        <img src={isSpecialCharacters ? greenCheck : redError} alt="" />
        <span>Special Character(s)</span>
      </div>
    </form>
  );
}

export default Register