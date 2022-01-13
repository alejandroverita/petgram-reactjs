import React from 'react';
import { useInputValue } from '../../Hooks/useInputValue';


export const UserForm = ({onSubmit}) => {

    const email = useInputValue('');
    const password = useInputValue('');
    
    return ( 
        <form onSubmit={onSubmit}>
            <input placeholder='Email' value={email.value} onChange={email.onChange} />
            <input placeholder='Password' type='Password' value={password.value} onChange={password.onChange} />
        <button>Iniciar Sesión</button>
        </form>
    )
}