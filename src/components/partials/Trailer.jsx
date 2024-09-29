import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom'

const Trailer = () => {
    const Navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    // console.log(ytvideo);
   
  return ytvideo ?  (
    <div className='bg-[rgba(0,0,0,.9)] absolute flex items-center justify-center w-screen h-screen left-0 top-0 z-[100]'>
        <Link 
            onClick={() => Navigate(-1)} 
            className="hover:text-blue-800 ri-close-line flex text-3xl absolute top-[5%] right-[5%] "></Link>
        <ReactPlayer
        controls
         height={500} 
         width={1200}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
    </div>
  ) :(
    <h1 className='text-4xl  text-center text-red-500 mt-48 ml-96'>Trailer Not Found </h1>
  )
}

export default Trailer