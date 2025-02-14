import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
          <div className="mb-4">
              <label className="block text-sm font-medium mb-2" for="fullName">Full Name:</label>
              <input type="text" id='fullName' className="w-full p-2 border rounded" placeholder="Enter your Full Name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" for="email">Email:</label>
              <input type="email" id='email' className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" for="password">Password:</label>
              <input type="password" id='password' className="w-full p-2 border rounded" placeholder="Enter your password" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" for="cPassword">Confirm Password:</label>
              <input type="password" id='cPassword' className="w-full p-2 border rounded" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
                <span>Have an account already?<Link to={"/login"} className="underline text-blue-600">Login in here! </Link></span>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp