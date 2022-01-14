import React from 'react';
import { useInputValue } from '../../Hooks/useInputValue';

import { Form, Input, Button, Title } from './styles';

export const UserForm = ({onSubmit, title}) => {

    const email = useInputValue('');
    const password = useInputValue('');
    
    return ( 
        <>
            <Title>{title}</Title>
            <Form onSubmit={onSubmit}>
                <Input placeholder='Email' value={email.value} onChange={email.onChange} />
                <Input placeholder='Password' type='Password' value={password.value} onChange={password.onChange} />
            <Button>{title}</Button>
            </Form>
        </>
    )
}