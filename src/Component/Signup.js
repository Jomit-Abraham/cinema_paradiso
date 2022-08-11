import React, { useState } from 'react'
import { Box, Button, Input, Text, Alert, AlertIcon } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'



function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            props.loginListener()

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Box w='100%' h='800px' bgGradient='linear(to-r, pink.200, gray.400)' display='grid' alignItems='center' >


            <Box ml='500px' mr='500px' >

                <Text fontSize='60px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.500, orange.500)' bgClip='text' >Cinema Paradiso</Text>
                <Text fontSize='30px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.500, orange.500)' bgClip='text' mb='3rem'>New user..? Register here</Text>

                <Input placeholder='Email' mb='2rem' color='White' onChange={(e) => { setEmail(e.target.value) }}></Input>

                <Input placeholder='Password' type='password' onChange={(e) => { setPassword(e.target.value) }}></Input>

                <Button color='blue.500' mt='4rem' w='100%' onClick={register}>Signup</Button>
            </Box>

            <Routes>
                <Route path='/home' element={<Home />} />
            </Routes>

        </Box >
    )
}

export default Signup