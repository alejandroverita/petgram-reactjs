import React, {useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import { UserForm } from '../Components/UserForm';

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext)
  return (
    <UserForm onSubmit={activateAuth}/>
  )
}
