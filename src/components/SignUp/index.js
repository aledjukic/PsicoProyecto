import React from 'react'
import {Button} from '../ButtonElements'
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
                        <FormH1> User Register</FormH1>
                        <FormLabel htmlFor = 'for'>First Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor = 'for'> Last Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor = 'for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor = 'for'>Phone Number</FormLabel>
                        <FormInput type='tel' required />
                        <FormLabel htmlFor = 'for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor = 'for'> Repeat Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit' to='/home' >Next</FormButton>
                        <Text>Eres Psicologo Registrate aqui</Text>
                        <Button to="/signup-psico">Registro Psicologos</Button>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignUp
