import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import { SubmitButton } from '../Components/SubmitButton';

export const User = () => {
    const { removeAuth } = useContext(AppContext);
    return ( 
        <>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth}>
                Sign out
            </SubmitButton>
        </>
    )
}