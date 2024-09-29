import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"

const Cards = ({data ,title}) => {

  return (
    <div className='flex flex-wrap w-full h-full px-[5%] bg-slate-950'>
        {data.map((c,i) =>  (  
             <Link 
             to={`/${data.media_type || title}/details/${c.id}`} 
              key={i}
              className='relative w-[30vh] mr-[5%] mb-[5%]'>
                <img 
               className ='shadow-[8px_17px_38_px2px_rgba(0,0,.5) w-[60vw] h-[40vh] object-cover]'
               src={ c.backdrop_path ||
                c.poster_path || 
                c.profile_path ?
                `https://image.tmdb.org/t/p/original/${
                    c.backdrop_path || c.profile_path ||  c.poster_path}` 
                :noimage}
          alt=""
          />
          <h1 className='mt-6 text-zinc-300 font-semibold'>
                {c.name|| 
                 c.title ||
                 c.original_ ||
                  c.original_title}
                </h1>
                 
                 {c.vote_average && (    <div  className=' absolute right-[0] bottom-[30%] text-white font-semibold rounded-full w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600'>
                    {(c.vote_average*10).toFixed()}<sup>%</sup></div>)}
            
             </Link>

        ))}
    </div>
  )
}

export default Cards