import Sidenav  from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import HorizontalCards from "./partials/HorizontalCards";
import { useState } from "react";
import axios from"../utils/axios";
import { useEffect } from "react";
import Header from "./partials/Header";
import Dropdown from './partials/Dropdown';

const Home = () => {
    document.title="My movie | Homepage";
    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all") 

    const GetHeaderWallpaper = async () => {
        try{
         const {data} = await axios.get(`trending/all/day`);
         let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
         setwallpaper(randomdata);

        } catch (error){
        //  
        }
       };
    
      const GetTrending = async () => {
        try{
         const {data} = await axios.get(`trending/${category}/day`);
         settrending(data.results);

        } catch (error){
      
        }
       };

       
       useEffect(() => {
        GetTrending();
        ! wallpaper && GetHeaderWallpaper();
    
      },[category]);
    
  return wallpaper &&  trending ?(
   <>

<Sidenav/>
<div className ="w-[80%] h-full bg-gray-800 overflow-x-hidden overflow-auto">
<Topnav/>
<Header data={wallpaper}/>

<div className ='mb-5 flex justify-between'>
        <h1 className ='p-5 text-3xl font-semibold text-blue-500'>Trending</h1>
             <div className="p-5">
          <Dropdown  title="Filter" 
          options={["tv", "movie" ,"all"]} 
          func={(e) =>setcategory(e.target.value)}
          />
     </div>
        </div>
      <HorizontalCards data ={trending}/>
</div>
   
  </>
  ):(

      <video autoPlay loop muted src="loading.mp4"></video>
    
  );
}

export default Home