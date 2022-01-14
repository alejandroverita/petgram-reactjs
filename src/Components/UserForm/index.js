import React from 'react';
import { useInputValue } from '../../Hooks/useInputValue';

import { Form, Input, Button, Title } from './styles';

export const UserForm = ({onSubmit, title}) => {

    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: email.value, 
            password: password.value
        })
    }
    
    return ( 
        <>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder='Email' {...email} />
                <Input placeholder='Password' type='Password' {...password} />
            <Button>{title}</Button>
            </Form>
        </>
    )
}