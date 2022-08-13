import React, { useEffect, useState } from 'react'
import { Box, Text, Button, Flex, grid, Image, Heading, Select } from '@chakra-ui/react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import axios from 'axios'
import { imgurl } from './Constants'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'



function Home(props) {
    const moviecollectionref = collection(db, 'movies')
    const [user, setUser] = useState('')
    const [movies, setMovies] = useState([])
    const [gener, setGener] = useState([])
    const [mymovie, setMymovie] = useState([])

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser.email)
        })

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=08853ad8f67bde441e00d0b7763418d0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=1&with_watch_monetization_types=flatrate').then((response) => {
            setMovies(response.data.results)

        })

        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=08853ad8f67bde441e00d0b7763418d0&language=en-US').then((response) => {
            setGener(response.data.genres)

        })

        const getMyMovie = async () => {
            const data = await getDocs(moviecollectionref)

            setMymovie(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }

        getMyMovie()
    }, [])

    const generListener = async (e) => {
        const id = e.target.value
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=08853ad8f67bde441e00d0b7763418d0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`).then((response) => {
            setMovies(response.data.results)


        })
    }

    const movieDetailsListener = (movie) => {
        props.movielistener(movie)
    }

    const signoutlistener = () => {
        signOut(auth)
        props.signout()
    }

    const addmovie = () => {
        props.addmovieHandler()
    }


    return (
        <Box w='100%' h='auto' bgGradient='linear(to-l,pink.700, gray.800)' display='grid' alignItems='flex-start' >

            <Box width='100%' h='60px' bgGradient='linear(to-l, pink.600, gray.700)' display='flex' justifyContent='space-between'>
                <Text fontSize='30px' ml='1rem' mt='4px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.500, orange.500)' bgClip='text'>Cinema Paradiso</Text>
                <Box display='Flex'>
                    <Button colorScheme='teal' variant='link' color='white' mr='1rem' onClick={addmovie}>Add your movie</Button>
                    <Text color='white' mt='18px' mr='2rem'>{user}</Text>
                    <Button colorScheme='teal' variant='solid' size='sm' pb='3px' mt='12px' mr='20px' onClick={signoutlistener}>Logout</Button>
                </Box>


            </Box>
            <Box w='100%' mt='15px' display='grid' justifyContent='flex-end'>
                <Select placeholder='Movie Geners' mr='25px' w='300px' onChange={generListener}>
                    {
                        gener.map((g) => <option value={g.id}  >{g.name}</option>)
                    }

                </Select>
            </Box>
            <Text color='white' display='flex' ml='2rem'>Your Movies</Text>
            <Box w='100%' display='grid' gridTemplateColumns='4fr 4fr 4fr 4fr ' mb='2rem'>
                {
                    mymovie.map((obj) => <Box> < Image borderRadius='8px' w='370px' h='300px' onClick={() => { movieDetailsListener(obj) }} ml='25px' mt='30px' mr='25px' src={obj.backdrop_path}></Image>
                        <Text mt='1rem' color="white">{obj.original_title}</Text></Box>
                    )
                }
            </Box>
            <Text color='white' display='flex' ml='2rem'>Universal Movies</Text>
            <Box display='grid' gridTemplateColumns='4fr 4fr 4fr 4fr ' >

                {
                    movies.map((movie) => <Box> < Image borderRadius='8px' w='370px' h='300px' onClick={() => { movieDetailsListener(movie) }} ml='25px' mt='30px' mr='25px' src={`${imgurl + movie.backdrop_path}`}></Image>
                        <Text mt='1rem' color="white">{movie.original_title}</Text></Box>
                    )

                }
            </Box>
        </Box >


    )
}

export default Home