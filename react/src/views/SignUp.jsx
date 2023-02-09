import { Link} from 'react-router-dom'

export default function SignUp(){

  const onSubmit = (e) => {
    e.preventDefault()
  }

    return(
      <div className="login-signup-form animated fadeInDown">
          <div className="form">
            <form action="" onSubmit={onSubmit}>
              <h1 className='title'>
                SignUp for free
              </h1>
              <input type="text" name="" id="" placeholder="Full Name" />
              <input type="email" name="" id="" placeholder="Email Address" />
              <input type="password" name="" id="" placeholder="Password" />
              <input type="password" name="" id="" placeholder="Password Confirmation" />
              <button className="btn btn-block">SingUp</button>
              <p className="message">
                Already Registered? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>
      </div>
    )
}
