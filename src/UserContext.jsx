// import { createContext, useState } from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     username: "francisco",
//     lastName: "papa",
//     edad: 50,
//   });
export const UserProvider = ({ children }) => {
   const user={
      username: "francisco",
      lastName: "papa",
      edad: 50,
    };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser=()=>{
    return useContext(UserContext)
}

//import {useUser} from ........
