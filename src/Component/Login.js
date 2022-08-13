import React, { useState } from 'react'
import { Box, Text, Input, Heading, Button, Alert, AlertTitle, AlertIcon } from '@chakra-ui/react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase';



function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)




    const onClickListener = () => {

        props.signupListener()
    }

    const loginHandler = () => {

        try {
            const user = signInWithEmailAndPassword(auth, email, password).then((response) => {
                props.homeListener(user.email)

            }).catch((err) => {
                setAlert(true)
            })


        } catch (error) {

        }



    }
    return (
        <Box w='100%' h='800px' bgGradient='linear(to-r, pink.200, gray.400)' display='flex' alignItems='center' justifyContent='space-between' >

            <Box margin='5rem'>
                <Text fontSize='90px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.500, orange.500)' bgClip='text'>Cinema Paradiso</Text>
                <Text color='gray' fontSize='10px'> Jomit Abraham</Text>
            </Box>

            <Box margin='8rem'>
                {
                    alert && <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>Sorry..! Invalid credentials</AlertTitle>

                    </Alert>
                }

                {
                    props.signupAlert && <Alert status='success'>
                        <AlertIcon />
                        New User created successfully, please login Again
                    </Alert>
                }


                <Input placeholder='Email' mb='2rem' mt='5rem' color='White' onChange={(e) => { setEmail(e.target.value) }}></Input>
                <Input placeholder='Password' type='password' onChange={(e) => { setPassword(e.target.value) }}></Input>


                <Button bgColor='blue.500' width='100%' color='white' mt="3rem" onClick={loginHandler}>Login </Button>
                <Box display='flex' justifyContent='flex-end'>
                    <Text fontFamily='arial' ml='2rem' mt='60px' color='Blue' fontSize='15Px'>New user..?</Text>
                    <Button color='Blue' ml='10px' fontFamily='arial' mt='50px' bgColor='white' fontSize='10Px' onClick={onClickListener}>Sign up</Button>




                </Box>

            </Box>

        </Box >



    )
}

export default Login