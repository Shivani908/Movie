import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Trending from './components/Trending'
import Popular from "./components/Popular"
import Movie from "./components/Movie"
import Tv from "./components/Tv"                              
import Person from "./components/Person"
import Moviedetails from './components/Moviedetails'
import Persondetails from './components/Persondetails'
import Tvdetails from './components/Tvdetails'
import Trailer from './components/partials/Trailer'

const App = () => {
  return (
    <div className ='bg-slate-950 w-screen h-screen flex'>
     <Routes>
     <Route path='/'element={<Home/>}/>  
     <Route path='/about'element={<About/>}/> 
     <Route path='/contact'element={<Contact/>}/> 
     <Route path='/trending'element={<Trending/>}/> 
     <Route path='/popular'element={<Popular/>}/> 
     <Route path='/movie'element={<Movie/>}/> 
     <Route path='/movie/details/:id' element={<Moviedetails/>}/>
     <Route path='/movie/details/:id/trailer'element={<Trailer/>}/>
     <Route path='/tv'element={<Tv/>}/> 
     <Route path='/tv/details/:id' element={<Tvdetails/>}/>
     <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
     <Route path='/person'element={<Person/>}/>
     <Route path='/person/details/:id' element={<Persondetails/>}/>
    
      </Routes>
      </div>
  )
}

export default App