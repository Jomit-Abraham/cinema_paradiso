import React from 'react'
import { Box, Text, Button, Flex, grid, Image, Heading, Select, Textarea } from '@chakra-ui/react'
import { imgurl } from './Constants'
function MovieDetails(props) {

    return (
        <Box w='100%' h='900px' bgGradient='linear(to-l,pink.700, gray.800)' display='grid'  >

            <Image ml='1rem' mt='1.3rem' w='98%' h='550px' Src={`${imgurl + props.movie.backdrop_path}`}></Image>
            <Box w='98%' display='grid' ml='1rem' mr='1.3rem' alignItems='flex-start'>
                <Text fontSize='40px' fontFamily='Arial Black' bgGradient='linear(to-l,blue.400, orange.400)' bgClip='text'>{props.movie.title}</Text>

                <Text fontSize='20px' fontFamily='Arial ' bgGradient='linear(to-l,blue.400, orange.400)' bgClip='text'>Release date : {props.movie.release_date}</Text>

                <Text fontSize='20px' fontFamily='Arial' bgGradient='linear(to-l,blue.400, orange.400)' bgClip='text'>Rating :  {props.movie.vote_average}</Text>

                <Text fontSize='20px' fontFamily='Arial' bgColor='white' bgClip='text'>  {props.movie.overview}</Text>


            </Box>

        </Box >
    )
}

export default MovieDetails