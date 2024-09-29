
import { useNavigate, } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Topnav from './partials/Topnav';
import axios from"../utils/axios";
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Person= () => {

    const Navigate = useNavigate();
    const [category, setcategory] = useState("popular")
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title="My movie| People" ;

    const GetPerson= async () => {
        try{
         const {data} = await axios.get(
          `/person/${category}?page=${page}`
        );
        //  setperson(data.results);
        // naya page ata rahe 
        if (data.results.length>0) {
            setperson((prevState) => [...prevState,...data.results])
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
        if (person.length === 0) {
            GetPerson();
        }else{
            setpage(1);
            setperson([]);
            GetPerson();
        }
    }  
       useEffect(() => {
      refershHandler();
    
      },[category]);

  return person. length > 0 ?(
    <div className=' w-screen h-screen '>
        <div className='w-full px-[5%]  flex item-center justify-between'>
            <h1 className='text-2xl font-semibold text-zinc-400 '>
            <i
            onClick={() => Navigate(-1)} 
            className="hover:text-blue-800 ri-arrow-left-line"></i>{""}
                People</h1>
             <div className ='flex items-center w-[80%]'>
             <Topnav/>
             
               
                </div>
        </div>
  <InfiniteScroll 
  dataLength={person.length}
  next={GetPerson}
  hasMore={true}
  >
    
 <Cards data={person} title="person"/>
  </InfiniteScroll>
    </div>
  ):(
    <h1>loading</h1>
  )
};

export default Person