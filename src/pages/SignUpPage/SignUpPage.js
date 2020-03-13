import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/auth/actions'


const SignUpPage = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password));
    setName('')
    setPassword('')
    setEmail('')
  }

  return (
    <div className='page'>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Sign Up!</button>
      </p>
    </form>
  </div>
  )
}

export default SignUpPage
