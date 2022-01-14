import React, {useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../Container/RegisterMutation';

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext)
  return (
    <>
    <RegisterMutation>
      {
        (register)=> {
          const onSubmit = ({email, password}) =>{
            const input = {email, password} 
            const variables = {input} 
            register({variables}).then(activateAuth)
          }
          
          return <UserForm title='Log In' onSubmit={onSubmit}/>
        }
      }
    </RegisterMutation>
    <UserForm title='Sign In' onSubmit={activateAuth}/>
    </>
  )
}
