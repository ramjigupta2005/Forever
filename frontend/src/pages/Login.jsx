import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {token,setToken,backendUrl,navigate}=useContext(ShopContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmitHandler=async(e)=>{
    e.preventDefault();

    try {
      if(currentState==="Sign up"){
        const response=await axios.post(backendUrl+'/api/user/register',{name,email,password});
        console.log(response.data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        } else {
          toast.error(response.data.message)
        }
        
      } else{
        const response=await axios.post(backendUrl+'/api/user/login',{email,password});
        console.log(response.data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);

        } else {
          toast.error(response.data.message)
        }     
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault()
  //   setError('')
  //   setLoading(true)

  //   try {
  //     const endpoint = currentState === 'Login' ? '/api/user/login' : '/api/user/signup'

  //     const payload = currentState === 'Login'
  //       ? { email, password }
  //       : { name, email, password }

  //     console.log(payload)

  //     const response = await fetch(endpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     })

  //     console.log(response);

  //     const data = await response.json()

  //     if (!response.ok) {
  //       setError(data.message || 'An error occurred')
  //       return
  //     }

  //     // Store token and handle success
  //     localStorage.setItem('token', data.token)
  //     alert(currentState === 'Login' ? 'Login successful!' : 'Signup successful!')
  //     // Redirect to home or dashboard
  //     window.location.href = '/'
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong')
  //   } finally {
  //     setLoading(false)
  //   }
  // }


useEffect(()=>{
  if(token){
    navigate('/')
  }
},[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='parata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {error && <p className='text-red-600 text-sm'>{error}</p>}

      {currentState === 'Sign up' && (
        <input
          className='w-full px-3 py-2 border border-gray-800'
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}

      <input
        className='w-full px-3 py-2 border border-gray-800'
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className='w-full px-3 py-2 border border-gray-800'
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === 'Login' && (
          <p className='cursor-pointer'>Forgot your password?</p>
        )}
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        )}
      </div>

      <button
        type='submit'
        disabled={loading}
        className='bg-black text-white font-light px-8 py-2 mt-4 disabled:opacity-50'
      >
        {loading ? 'Processing...' : (currentState === 'Login' ? 'Sign In' : 'Sign up')}
      </button>
    </form>
  )
}

export default Login