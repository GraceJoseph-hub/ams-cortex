import React from 'react'
import Input from '../globalComponents/Input'

const Register = () => {
  return (
    <div>
      <h2>Create an account</h2>
      <Input label="Business Name" type="text"/>
      <Input label="Business Type" type="text"/>
      <Input label="Number of Employee" type="number"/>
      <Input label="Create Password" type="password"/>
      <Input label="Confirm password" type="password"/>
    </div>
  )
}

export default Register