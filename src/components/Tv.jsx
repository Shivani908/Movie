import { useNavigate, } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from"../utils/axios";
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tv = () => {

    const Navigate = useNavigate();
    const [category, setcategory] = useState("airing_today")
    const [tv, settv] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title="My movie| tv" ;

    const GetTv= async () => {
        try{
         const {data} = await axios.get(
          `/tv/${category}?page=${page}`
        );
        //  settv(data.results);
        // naya page ata rahe 
        if (data.results.length>0) {
            settv((prevState) => [...prevState,...data.results])
            setpage(page+1)
            //  console.log(data);
        }else{
            sethasMore(false);
        }
    
        } catch (error){
         console.log ("Error:",error);
        }
       };
    const refershHandler = async () => {
        if (tv.length === 0) {
            GetTv();
        }else{
            setpage(1);
            settv([]);
            GetTv();
        }
    }  
       useEffect(() => {
      refershHandler();
    
      },[category]);

  return tv. length > 0 ?(
    <div className=' w-screen h-screen '>
        <div className='w-full px-[5%]  flex item-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400 '>
            <i
            onClick={() => Navigate(-1)} 
            className="hover:text-blue-800 ri-arrow-left-line"></i>{""}
            Tv<small className='text-sm ml-2 text-zinc-600'>({category})</small></h1>
             <div className ='flex items-center w-[80%]'>
             <Topnav/>
             <Dropdown 
             title="Category"
             options={[ "on_the_air","popular" , "top_rated","airing_today"]}
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
  dataLength={tv.length}
  next={GetTv}
  hasMore={true}
  >
    
 <Cards data={tv} title="tv"/>
  </InfiniteScroll>
    </div>
  ):(
    <h1>loading</h1>
  )
};

export default Tv;