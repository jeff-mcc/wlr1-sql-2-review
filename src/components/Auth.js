import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {saveUser} from '../redux/authReducer'

const Auth = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  
  const handleRegister = () => {
    axios.post('/auth/register',{email,password})
      .then(res=>{
        dispatch(saveUser(res.data))
      })
      .catch(err=>console.log(err))
  }

  const handleLogin = () => {
    axios.post('/auth/login',{email,password})
      .then(res=>{
        dispatch(saveUser(res.data))
      })
      .catch(err=>console.log(err))
  }

  return(
      <div>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <input value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    )
  }
  
  export default Auth