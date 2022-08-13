import React, { useState } from 'react'
import { Box, Button, Input, Text, Textarea, Alert, AlertIcon } from '@chakra-ui/react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

function AddMovie() {
    const [mname, setMname] = useState();
    const [mid, setMid] = useState();
    const [mdescription, setMdescription] = useState();
    const [movieurl, setMovieurl] = useState();
    const moviecollectionref = collection(db, 'movies')
    const [movie, setMovie] = useState([])
    const [alert, setAlert] = useState(false)

    const newmoviedetails = async () => {
        await addDoc(moviecollectionref, { original_title: mname, id: mid, overview: mdescription, backdrop_path: movieurl })
        setAlert(true)
        setMname('')
        setMid('')
        setMdescription('')
        setMovieurl('')

    }

    const functionName = e => {
        setMname(e.target.value)
        setAlert(false)
    }

    const functionid = e => {
        setMid(e.target.value)
        setAlert(false)
    }

    const functiondescription = e => {
        setMdescription(e.target.value)
        setAlert(false)
    }

    const functionurl = e => {
        setMovieurl(e.target.value)
        setAlert(false)
    }

    return (
        <Box w='100%' h='900px' bgGradient='linear(to-l,pink.700, gray.800)' display='flex' flexDirection='column' alignItems='center' >

            <Box w='70%' mt='5rem' display='flex' flexDirection='column' >
                <Text color='white' fontSize='50px' fontFamily='Arial Black'>Add your movie here</Text>

                <Input placeholder='Movie name' mt='2rem' value={mname} mb='2rem' color='White' onChange={functionName}></Input>

                <Input placeholder='Movie id' mb='2rem' color='White' value={mid} onChange={functionid}></Input>

                <Textarea placeholder='Movie description' mb='2rem' value={mdescription} color='White' onChange={functiondescription}></Textarea>


                <Input placeholder='Image url' value={movieurl} mb='2rem' color='White' onChange={functionurl}></Input>


                <Button onClick={newmoviedetails}> Submit</Button>
                {alert && <Alert status='success' mt='40px'>
                    <AlertIcon />
                    New Movie Added successfully
                </Alert>
                }

            </Box>



        </Box>
    )
}

export default AddMovie