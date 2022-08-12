import { ChakraProvider, Alert, AlertIcon } from '@chakra-ui/react'
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Component/Home';
import { useState } from 'react';
import MovieDetails from './Component/MovieDetails';
import AddMovie from './Component/AddMovie';


function App() {

  const navigate = useNavigate()
  const [signupAlert, setSignupAlert] = useState(false)
  const [movie, setMovie] = useState({})
  const signupnavigate = () => {
    navigate('/signup')
  }

  const loginNavigate = () => {
    setSignupAlert(true)
    navigate('/')
  }

  const homeNavigate = () => {

    navigate('/home')
  }
  const moviedetailsNavigation = (movie) => {
    setMovie(movie)
    console.log(movie)
    navigate('/moviedetails')
  }

  const signoutHandler = () => {
    navigate('/')
  }

  const addmovieListener = () => {
    navigate('/addmovie')
  }

  return (
    <div className="App">
      <ChakraProvider>


        <Routes>
          <Route path='/' exact element={<Login signupListener={signupnavigate} homeListener={homeNavigate} signupAlert={signupAlert} />}></Route>

          <Route path='/signup/*' element={<Signup loginListener={loginNavigate} />} />
          <Route path='/home' element={<Home movielistener={moviedetailsNavigation} signout={signoutHandler} addmovieHandler={addmovieListener} />} />
          <Route path='/moviedetails' element={<MovieDetails movie={movie} />} />
          <Route path='/addmovie' element={<AddMovie />}></Route>

        </Routes>
      </ChakraProvider>

    </div >
  );
}

export default App;
