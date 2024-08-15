import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <h2>Account Login</h2>
        <p>If you are already a member, you can login with</p>
        <br /> your email address and password.
      </div>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="">Email address</label>
          <input type="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>

        <div className='flex'>
          <input type="checkbox" />
          <label htmlFor="">Remember me</label>
        </div>

        <button>Sign in</button>
      </form>
    </div>
  );
}

export default Login