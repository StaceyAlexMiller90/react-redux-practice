import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../store/auth/selectors'
import { logout } from '../store/auth/actions'

const Toolbar = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  console.log(user)

  return (
    <div>
      {!user ? 
        <Link to='/login'>Login</Link> 
        : <><p>{user.name}</p> <Link to='/' onClick={() => dispatch(logout)}>Logout</Link></>}
    </div>
  )
}

export default Toolbar
