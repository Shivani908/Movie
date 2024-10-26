
import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  
  return(

<div className='w-[20%] h-full border-r-2 border-zinc-400 p-8'>
    <h1  className='text-2xl text-white font-bold'>
        <i className ="text-[#09A4DB] ri-tv-fill mr-2">   </i>
           <span className ='text-2xl'>MY Moives</span>

    </h1>
       <nav className='flex flex-col text-zinc-400 gap-3 text-l'>

        <hr />
        <h1 className='text-white font-semibold text-xl my-10  mb-5'>
        New Feeds
        </h1>
     <Link 
     to='/trending'
     className ='hover:bg-blue-400 hover:text-white duration-300 p-3 rounded-lg'>

     <i className ="ri-fire-line p-2"></i>Tranding</Link>
     
     <Link 
     to="/movie" className ='hover:bg-blue-400 hover:text-white duration-300 p-3 rounded-lg'>
     <i className ="ri-movie-line p-2"></i>Moive</Link>
     <Link
     to="/tv" 
      className='hover:bg-blue-400 hover:text-white duration-300 p-3 rounded-lg'>
     <i className ="ri-tv-line p-2"></i>Tv Shows</Link>
     <Link 
     to="/person" className ='hover:bg-blue-400 hover:text-white duration-300 p-3 rounded-lg'>
     <i className ="ri-group-line p-2"></i>People</Link>
     <Link 
     to="/popular"
     className ='hover:bg-blue-400 hover:text-white duration-300 p-3 rounded-lg'>
     <i className ="ri-user-star-fill p-2"></i>Popular</Link>
     
  

    </nav>
    
    <hr  className ='border-none h-[1px] mt-2 bg-zinc-400' />
    <div className ='flex flex-col'>
    <h1 className ='text-white font-semibold text-xl mt-5'>
        My movie info
        </h1>
     <Link to="/about" className  =' text-zinc-100 hover:bg-blue-400 hover:text-white mt-2 duration-300 p-3 rounded-lg'>
     <i className ="ri-information-line p-2"></i>About</Link>
     <Link to="/contact" className=' text-zinc-100 hover:bg-blue-400 hover:text-white duration-300 mt-2 p-3 rounded-lg'>
     <i className="ri-phone-fill p-2"></i>Contact Us</Link>
     </div>

    </div>
  );
}

export default Sidenav