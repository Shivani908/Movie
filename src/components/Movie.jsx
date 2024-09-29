
import { useNavigate, } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from"../utils/axios";
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movie = () => {

    const Navigate = useNavigate();
    const [category, setcategory] = useState("now_playing")
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title="My movie |Movie" ;

    const GetMovie = async () => {
        try{
         const {data} = await axios.get(
          `/movie/${category}?page=${page}`
        );
        //  setmovie(data.results);
        // naya page ata rahe 
        if (data.results.length>0) {
            setmovie((prevState) => [...prevState,...data.results])
            setpage(page+1)
             console.log(data);
        }else{
            sethasMore(false);
        }
    
        } catch (error){
        //  console.log ("Error:",error);
        }
       };
    const refershHandler = async () => {
        if (movie.length === 0) {
            GetMovie();
        }else{
            setpage(1);
            setmovie([]);
            GetMovie();
        }
    }  
       useEffect(() => {
      refershHandler();
    
      },[category]);

  return movie . length > 0 ?(
    <div className=' w-screen h-screen'>
        <div className='w-full px-[5%]  flex item-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400 '>
            <i
            onClick={() => Navigate(-1)} 
            className="hover:text-blue-800 ri-arrow-left-line"></i>{""}
            Movie <small className='text-sm ml-2 text-zinc-600'>({category})</small></h1>
             <div className ='flex items-center w-[80%]'>
             <Topnav/>
             <Dropdown 
             title="Category"
             options={["popular" , "top_rated","upcoming","now_playing"]}
             func={(e) =>setcategory(e.target.value)}
                />
                {/* <div className='w-[2%]'></div>
                <Dropdown 
             options={["week","day"]}
                func={(e) =>setduration(e.target.value)}
                /> */}
                </div>
        </div>
  <InfiniteScroll 
  dataLength={movie.length}
  next={GetMovie}
  hasMore={true}
  >
    
 <Cards data={movie} title="movie"/>
  </InfiniteScroll>
    </div>
  ):(
    <video className=' ml-24 ' autoPlay loop muted src="loading.mp4"></video>
  )
};

export default Movie