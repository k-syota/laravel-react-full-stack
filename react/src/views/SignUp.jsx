import { useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function SignUp(){

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState(null);
  const {setUser, setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault()
    const payLoad = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    console.log(payLoad);
    axiosClient.post('/signup', payLoad)
    .then(({data})=>{
      setUser(data.user);
      setToken(data.token);
    })
    .catch(err=>{
      const response = err.response;
      if(response && response.status === 422){
        console.log(response.data.errors);
        setErrors(response.data.errors);
      }
    })
  }

    return(
      <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form action="" onSubmit={onSubmit}>
              <h1 className='title'>
                SignUp for free
              </h1>
              {
                errors && <div className='alert'>
                  {Object.keys(errors).map(key=>(
                    <p key={key}>{errors[key][0]}</p>
                  ))}
                </div>
              }
              <input ref={nameRef} type="text" name="" id="" placeholder="Full Name" />
              <input ref={emailRef} type="email" name="" id="" placeholder="Email Address" />
              <input ref={passwordRef} type="password" name="" id="" placeholder="Password" />
              <input ref={passwordConfirmationRef} type="password" name="" id="" placeholder="Password Confirmation" />
              <button className="btn btn-block">SingUp</button>
              <p className="message">
                Already Registered? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
      </div>
    )
}
