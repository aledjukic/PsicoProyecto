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
    } from './RegisterElements'

const RegisterPsico = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>MindSet</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Psicologo Register</FormH1>
                        <FormLabel htmlFor='for'>First Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='name' required />
                        <FormLabel htmlFor = 'for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor = 'for'>Phone Number</FormLabel>
                        <FormInput type='tel' required />
                        <FormLabel htmlFor = 'for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor = 'for'> Repeat Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor = 'for'>Introduzca los archivos necesarios</FormLabel>
                        <FormInput type='file' required />
                        <FormButton type='submit' to='/home' >Next</FormButton>


                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default RegisterPsico
