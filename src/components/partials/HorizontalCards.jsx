import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"


const HorizontalCards = ({data}) => {
  
  return (
        <div className='w-[100%] p-5 mb-5  flex overflow-y-hidden' >
            {data.map((d,i) => (
                <Link 
                to={`/${d.media_type}/details/${d.id}`} 
                key={i}
                 className='min-w-[18%] shadow-black shadow-xl bg-zinc-800 mr-5 mb-5'>
                  <img
                  className='w-full h-[55%]  object-cover'
                   src={ d.backdrop_path || 
                    d.poster_path ||
                    d.profile_path ?
                    `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.poster_path || d.profile_path}` 
                    :noimage}
                                    alt=""
                                     />

                          <div className=' text-white p-3 rounded'>
                          <h1 className='font-bold text-white '>{
                    d.name|| 
                     d.title ||
                         d.original_ ||
                         d.original_title}
                         </h1>

                      <p className="text-zinc-300">
                      {d.overview.slice(0,40)}
                      <span  className="text-Zinc-600">....more
                      </span>
                           </p>
                          </div>
                        </Link>
            
                
            )) };
        </div>
  );
 };

export default HorizontalCards