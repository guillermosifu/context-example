import React from 'react'
import{UserContext} from "./UserContext"

const UserProfile = () => {
  const user =UserContext()

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