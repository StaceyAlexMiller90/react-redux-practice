import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../store/auth/selectors'
import { logout } from '../../store/auth/actions'
import './Toolbar.css'


const Toolbar = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  console.log(user)

  return (
    <div className="bg-black-90 fixed w-100 ph3 ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
      <p className='header dim white dib mr3'>Codaisseur API React/Redux</p>  
      <Link className="link dim white dib mr3" to='/post'>Posts</Link> 
      {!user ?
        <>
          <Link className="link dim white dib mr3" to='/login'>Login</Link>
          <Link className="link dim white dib mr3" to='/signup'>Sign Up</Link> 
        </>
        : <> 
            <p className="link dim white dib mr3">{user.name}</p> 
            <Link className="link dim white dib mr3" to='/' onClick={() => dispatch(logout)}>Logout</Link>
          </>
      }
      </nav>
    </div>
  )
}

export default Toolbar
