import React, { useContext } from 'react'
// import{UserContext} from "./UserContext"
import { useUser } from './UserContext'

const UserProfile = () => {
//   const {user,setUser} =useContext(UserContext)
const user=useUser()

  return (
    <div>
        <p>Perfil del usuario</p>
        <p>nombre:{user.username}</p>
        <p>apellido:{user.lastName}</p>
        <p>edad:{user.edad}</p>
    </div>
  )
}

export default UserProfile