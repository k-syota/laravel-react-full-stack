import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout(){

  const {user, token, setUser, setToken, notification} = useStateContext()

  const onLogout = (e) => {
    e.preventDefault();

    axiosClient.post('/logout')
    .then(()=>{
      setUser({})
      setToken(null)
    })
  }

  useEffect(()=>{
    axiosClient.get('/user')
    .then(({data})=>{
      setUser(data)
    })
  },[])

  if(!token){
    return <Navigate to="/login" />
  }

  return(
      <div id="defaultLayout">
        <aside>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </aside>
        <div className="content">
          <header>
            <div>
              Header
            </div>
            <div>
              {user.name}
              <a href="#" onClick={onLogout} className="logout">Logout</a>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
        {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
  )
}
