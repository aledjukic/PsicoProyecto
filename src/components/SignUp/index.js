import React from 'react'
import {Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
    } from './SignUpElements'

const SignUp = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>MindSet</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>MindSet</FormH1>
                        <FormH1>Register</FormH1>
                        <FormLabel htmlFor = 'for'>First Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor = 'for'> Last Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor = 'for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor = 'for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor = 'for'> Repeat Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Next</FormButton>
                        <Text>Eres Psicologo Registrate aqui</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignUp
