
import {  useNavigate, } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from"../utils/axios";
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

    const Navigate = useNavigate();
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState([])
    
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title="My movie | Trending"   +   category.toUpperCase();

    const GetTrending = async () => {
        try{
         const {data} = await axios.get(
          `trending/${category}/${duration}?page=${page}`
        );
        //  settrending(data.results);
        // naya page ata rahe 
        if (data.results.length>0) {
            settrending((prevState) => [...prevState,...data.results])
            setpage(page+1)
            //  console.log(data);
        }else{
            sethasMore(false);
        }
    
        } catch (error){
        //  console.log ("Error:",error);
        }
       };
    const refershHandler = async () => {
        if (trending.length === 0) {
            GetTrending();
        }else{
            setpage(1);
            settrending([]);
            GetTrending();
        }
    }  
       useEffect(() => {
      refershHandler();
    
      },[category,duration]);

  return trending . length > 0 ?(
    <div className=' w-screen h-screen '>
        <div className='w-full px-[5%]  flex item-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400 '>
            <i
            onClick={() => Navigate(-1)} 
            className="hover:text-blue-800 ri-arrow-left-line"></i>{""}
             Trending</h1>
             <div className ='flex items-center w-[80%]'>
             <Topnav/>
             <Dropdown 
             title="Category"
             options={["movie","tv", "all"]}
             func={(e) =>setcategory(e.target.value)}
                />
                <div className='w-[2%]'></div>
                <Dropdown 
             title="Duration"
             options={["week","day"]}
                func={(e) =>setduration(e.target.value)}
                />
                </div>
        </div>
  <InfiniteScroll 
  dataLength={trending.length}
  next={GetTrending}
  hasMore={true}
  >
    
 <Cards data={trending} title={category}/>
  </InfiniteScroll>
    </div>
  ):(
    // <h1>loading</h1>
    <video className=' ml-24 ' autoPlay loop muted src="loading.mp4"></video>
  )
};

export default Trending