import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { asyncloadmovie,} from '../store/actions/movieActions';
import HorizontalCards from './partials/HorizontalCards';


const Moviedetails = () => {
  const {pathname} = useLocation()
  const  navigate = useNavigate();
const {id} = useParams();
const {info} = useSelector((state) => state.movie);
const dispatch = useDispatch();
useEffect (() =>{
  dispatch(asyncloadmovie(id));
  // data remove ho jaye console se
  // return(() => {
  //   dispatch(removemovie());
  // })
},[id]);
return info ? (
<div  className="relative p-[3%] w-[100%] h-full  overflow-x-hidden overflow-auto"
 style={{
  background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.8),rgba(0,0,0,.10)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
   backgroundPosition:"center",
   backgroundSize:"cover",
   backgroundRepeat:"no-repeat"
}} 
>   

{/* part 1 naviagtion */}
<nav className='w-full text-zinc-200 text-2xl'>
<Link  onClick={() => navigate(-1) } 
className=" ml-4 hover:text-blue-800 ri-arrow-left-line"></Link>{""}
<a target='_blank' href={info.detail.homepage}>
  <i className=" ml-4 ri-external-link-fill hover:text-blue-800" >
  
   </i>
</a>
<a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
  <i className="ml-4 ri-search-fill  hover:text-blue-800"></i>
</a>
<a className='ml-4  hover:text-blue-800'target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>

</nav> 

{/* part2 */}

<div className='flex w-full'>

  <div> 
    <div className='flex'>
     <img 
    className =' p-4 shadow-[8px_17px_38_px2px_rgba(0,0,.5) w-[25vw] h-[50vh] object-cover]'
     src={`https://image.tmdb.org/t/p/original/${
        info.detail.poste_path || info.detail.backdrop_path}`}
          alt=""
          />
          
          <div className="content">
          <h1 className='mt-6 text-zinc-300 text-3xl font-bold'>
          {info.detail.name|| 
          info.detail.title ||
          info.detail.original_ ||
          info.detail.original_title}

          <small className='ml-4 text-zinc-400'>
          ({info.detail.release_date.split("-")[0]})
            </small>
              </h1>
              <div className='flex text-white items-center gap-x-5 mt-5'>
              {info.detail.vote_average && (
              <span className='  text-white font-semibold rounded-full w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600'>
              {(info.detail.vote_average*10).toFixed()}<sup>%</sup>
              </span>)}

                  <h1 className='font-semibold text-1xl'>User Score</h1>
                  <h1 className=''>{info.detail.release_date}</h1>
                  <h1>{info.detail.genres.map((g) => g.name) .join(",")}</h1>
                  <h1>{info.detail.runtime}{""}min</h1>
                   
                    </div>
                    <div className='text-white'>
                      <h1  className='font-semibold text-2xl'>Tagline</h1>
                       <h1>{info.detail.tagline} </h1>
                    <h1 className='font-semibold text-2xl'>Overview</h1>
                    <p className='w-[60vw]'> {info.detail.overview}</p>

                    <Link to={`${pathname}/trailer`} className=' flex mt-5 text-white text-xl italic rounded px-4 py-4 bg-blue-800 w-[10vw]'>Play trailer</Link>
                    
                     </div>
                     </div>
                     </div>
                     <hr className=' mt-10 border-none h-[2px] bg-zinc-500' />
                     <h1 className='text-white text-3xl'> Recommandation and Similar</h1>
                     <div className='w-[50%] flex overflow-y-hidden'>
                     <HorizontalCards 
              data={info.similar}
              />
              
              </div>

<div> 
  {info.watchproviders && info.watchproviders.flatrate && info.watchproviders.flatrate .map((w)  => <img src={`https://image.tmdb.org/t/p/original/${
        w.logo_path
        }`} alt=""
         /> )}


</div>
</div>

</div>
<Outlet/>
</div>
  
) :(
  <video className=' ml-24 ' autoPlay loop muted src="loading.mp4"></video>
)
};

export default Moviedetails;