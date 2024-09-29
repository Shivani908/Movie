import React from 'react'

const About = () => {
  return (
    <div className='text-white  px-64'>
        <div className=''>
        <h1 className='mt-20 text-center font-bold text-5xl'>Lets talks about TMDB</h1>

        <p className='mt-5 text-center'>The Movie Database (TMDB) is a community built movie and TV database.  Every piece of data has been added by our amazing community dating back to 2008.   TMDB's strong international focus and breadth of data is largely unmatched and  something we're incredibly proud of.Put simply, we live and breathe community and that's precisely what makes us different.</p>
        </div>

        <div className='list-disc mt-20 inline-block'>  
            <h1 className='font-bold text-3xl text-center'>The TMDB Advantages</h1>
            <li className=' px-24 mt-5'> 

            Every year since 2008, the number of contributions to our database has increased(check out our last years wrap!) With over 1,500,000 developers  and companies using our platform, TMDB has become a premiere source  for metadata. </li>
            <li  className=' px-24 mt-5'>We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.</li>
            <li className=' px-24 mt-5'>

Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</li>

            </div>
    </div>
    
  )
}

export default About