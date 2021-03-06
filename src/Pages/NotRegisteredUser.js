import React, {useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import { UserForm } from '../Components/UserForm';
import { RegisterMutation } from '../Container/RegisterMutation';
import { LoginMutation } from '../Container/LoginMutation';

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext)
  return (
    <>
    <RegisterMutation>
      {
        (register, {data,loading, error})=> {
          const onSubmit = ({email, password}) =>{
            const input = {email, password} 
            const variables = {input} 
            register({variables}).then(({data})=> {
              const {signup} = data
              activateAuth(signup)
            })
          }

          const errorMsg = error && 'User already exists.'
          
          return <UserForm disabled={loading} error={errorMsg} title='Log In' onSubmit={onSubmit}/>
        }
      }
    </RegisterMutation>
    <LoginMutation>
      {
        (login, { data, loading, error}) => {
          const onSubmit = ({email, password}) =>{
            const input = {email, password} 
            const variables = {input} 
            login({variables}).then(({data})=>{
              const {login} = data
              activateAuth(login)
            })
          }

          const errorMsg = error && 'User or password is wrong.'
          return <UserForm disabled={loading} error={errorMsg} title='Sign In' onSubmit={onSubmit}/>

        }
      }
    </LoginMutation>
    </>
  )
}
