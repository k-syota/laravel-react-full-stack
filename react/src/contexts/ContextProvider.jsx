import { createContext, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null
})

export const ContextProvider = ({children}) => {

  const [user, setUser] = useState({});
  const [token, _setTOken] = useState(null);
  return(
    <StateContext.Provider value={{

     }}>

    </StateContext.Provider>
  )
}
