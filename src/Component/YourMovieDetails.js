import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

function YourMovieDetails(props) {
    console.log(props.yourmovie)
    return (
        <Box w='100%' h='900px' bgGradient='linear(to-l,pink.700, gray.800)' display='grid'  >
            <Image ml='1rem' mt='1.3rem' w='98%' h='550px' src={props.yourmovie.backdrop_path} alt='Image not available' color='white'></Image>
            <Box w='98%' display='grid' ml='1rem' mr='1.3rem' alignItems='flex-start'>
                <Text fontSize='40px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.400, orange.400)' bgClip='text'>{props.yourmovie.title}</Text>



                <Text fontSize='20px' fontFamily='Arial' bgColor='white' bgClip='text'>  {props.yourmovie.overview}</Text>


            </Box>

        </Box >
    )
}

export default YourMovieDetails