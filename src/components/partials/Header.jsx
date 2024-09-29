import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
    
  return  (
    <div 
    style={{
        background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.8),rgba(0,0,0,.10)),url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path})`,
         backgroundPosition:"center",
         backgroundSize:"cover",     
         backgroundRepeat:"no-repeat"
    }}
  className ='w-full h-[60vh] flex flex-col justify-end  p-[5%]'>
        
<h1 className ='w-[70%] text-5xl font-bold text-white p-'>{
data.name|| 
data.title ||
 data.original_ ||
  data.original_title}</h1>

  <p className='w-[70%] text-white p-3'>{data.overview.slice(0,200)}
     <Link  to={`/${data.media_type}/details/${data.id}`}  className="text-blue-400">....more</Link>
  </p>

  <p className ='text-white p-2'>
  <i className="ri-megaphone-fill ">{""}{data.release_date}</i>
  <i className="ml-5 ri-album-fill ">{""}{data.media_type}</i>
  </p> 
    <Link  
     className=' p-3 font-semibold rounded bg-blue-500 text-1xl mt-3 h-12 text-white w-32 '>
    {""}
    watch trailer
    </Link>
     </div>
    
)
}

export default Header