import axios from '../../utils/axios';
import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from "/noimage.jpg"



const Topnav = () => {
  const [query, setquery] = useState("")
  const [searches,setsearches] = useState([]);

    const GetSerches = async () => {
   try{
    const {data} = await axios.get(`/search/multi?query=${query}`);
    setsearches(data.results);
   } catch (error){
    // console.log ("Error:",error);
   }
  };
  useEffect(() => {
    GetSerches();

  }, [query]);
  return (
    <div  className='w-[70%] h-[8vh] mb-8 justify-center flex item center relative text-white ml-[15%]'>
        <i className="mt-4 text-zinc-400 text-2xl ri-search-line"></i>
        <input 
        onChange={(e) =>
        setquery(e.target.value)}
        value={query}
        className ='w-[50%] text-zinc-200 mx-5 p-2 rounded text-xl bg-transparent border-none'
        type="text"
        placeholder='search anything' 
        />
        {/* if query ki length 0 se badi hai to close  dikhye */}
        {/* on click use for jab bhi close pr click kare seacrh ko khali kr de */}
        {query.length > 0 && (
        <i
        onClick={() => setquery("")}
        className ="mt-4 text-zinc-400 text-2xl ri-close-line"></i>
        )}

        <div className=' z-[100] absolute text-black mt-20 absolute w-[70%] max-h-[60vh] bg-zinc-200 overflow-auto'>
            {searches.map((s,i) => (

<Link   to={`/${s.media_type}/details/${s.id}`}
key={i} 
className=' hover:text-violet-950 hover:bg-violet-300 duration-300 font-semibold inline-block bg-zinc-100  text-Zinc-400 w-[100%] p-10 flex item-center justify-start border-zinc-500 border-b-2'>
<img 
className='w-[12vw h-[12vh] object-cover mr-10 rounded'
src={
    s.backdrop_path || 
    s.profile_path ?
    `https://image.tmdb.org/t/p/original/${
        s.backdrop_path || s.profile_path}` 
    :noimage}
alt=""
     />
<span>{s.name || s.title || s.original_ || s.original_title}</span>
</Link>

            ))}
             
        </div>
        </div>
  )
}

export default Topnav