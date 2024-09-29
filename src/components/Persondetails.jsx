import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams, } from 'react-router-dom'
import { asyncloadperson,} from '../store/actions/personAction';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';

const Persondetails = () => {
  const {pathname} = useLocation();
  const  navigate = useNavigate();
const {id} = useParams();
const {info} = useSelector((state) => state.person);
const dispatch = useDispatch();
const [category, setcategory] = useState("movie")
useEffect (() =>{
  dispatch(asyncloadperson(id));
 
},[id]);
return info ? (
  <div className='flex flex-col pb-[5%] h-[250vh] w-screen bg-[#1F1E24] px-[8%]'>
      {/* part 1 naviagtion */}
<nav className='w-full text-zinc-200 text-3xl '>
<Link  onClick={() => navigate(-1) } 
className=" ml-4 hover:text-blue-800 ri-arrow-left-line"></Link>{""}
</nav> 

<div className='w-full flex'>
  {/* part  2 left poster and */}
  <div className='w-[20%]'>
  <img 
    className ='p-4 shadow-[8px_17px_38_px2px_rgba(0,0,.5) w-[25vw] h-[50vh] object-cover]'
     src={`https://image.tmdb.org/t/p/original/${
        info.detail.profile_path}`}
          alt=""
          />
          <hr className=' border-none h-[2px] bg-zinc-500' />
  
          {/* solcial media links */}
          <div className='flex p-3 gap-x-5'>
          <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i className="ml-4 text-2xl text-white ri-earth-fill"></i>
          </a>
          <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
            <i className="ml-4 text-2xl text-sky-400 ri-facebook-fill"></i>
          </a>
          <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
            <i className="ml-4 text-2xl text-pink-600 ri-instagram-fill"></i>
          </a>
          <a target='_blank' href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
            <i className="ml-4 text-2xl text-white ri-twitter-x-fill"></i>
          </a>
         
          
          </div>
          {/* personal infomation */}
           <h1 className='text-2xl text-zinc-300'>Personal Details</h1>
           <h1 className='text-lg text-zinc-300'>Know for</h1>
           <h1 className=" text-zinc-400">{info.detail.known_for_department}</h1>
           <h1 className='text-lg text-zinc-300'>Gender</h1>
           <h1 className=" text-zinc-400">{info.detail.gender ===  2 ? "male" :"female"}</h1>
           <h1 className='text-lg text-zinc-300'>Birthday</h1>
           <h1 className=" text-zinc-400">{info.detail.birthday}</h1>
           <h1 className='text-lg text-zinc-300'>Deathday</h1>
           <h1 className=" text-zinc-400">{info.detail.deathday? info.detail.deathday : "stile alive" }</h1>
           <h1 className='text-lg text-zinc-300'>Place of birth</h1>
            <h1 className=" text-zinc-400">{info.detail.place_of_birth}</h1>
            <h1 className='text-lg text-zinc-300'>Also Known As</h1>
            <h1 className=" text-zinc-400">{info.detail.also_known_as.join(",")}</h1>
           
          </div>

  {/* part 3 right details and information */}

  <div className='w-[80%] ml-[5%]'>
  <h1 className='text-4xl text-rose-500  font-bold text-zinc-300'>{info.detail.name}</h1>
  <h1 className='text-lg text-zinc-300'>Biograpgy</h1>
  <h1 className='text-zinc-400 mt-3'>{info.detail.biography}</h1>
  <h1 className='text-lg text-zinc-300'>Known fOR</h1>

  <HorizontalCards 
    data={info.combinedCredits.cast}
              />

<div className=' w-full flex justify-between'>
  <h1 className=' font-semibold mt-5 text-lg text-zinc-300'>Acting</h1>

  <Dropdown 
  title="Category"
    options={["tv", "movie"]}
    func={(e) =>setcategory(e.target.value)}
      />
  </div>
  <div className='list-disc text-zinc-400 w-full overflow-x-hidden h-[50vh] overflow-y-auto shadow-white shadow-xl mt-5 border-2 border-zinc-700'>
    {info[category  + "Credits"].cast.map((c,i) => (
    <li key={i} className='hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursoe-pointer'>
    <Link to={`/${category}/details/${c.id}`} className=''>
      <p className='inline'>
        {""}
        {c.name || c.title || c.original_name|| c.original_title}
    </p>
    <p className='block ml-5 mt-2'>
    {c.character && ` Character name : {c.character}`}
   
    </p>
    </Link>

    </li>
  ))}
  </div>
 
  </div>   
</div>
</div> 


) :(
  <video className=' ml-24 ' autoPlay loop muted src="loading.mp4"></video>
)
};

export default Persondetails