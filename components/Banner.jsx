import React, { useEffect, useState } from 'react'
import instance from '../src/Instance';

function Banner({fetchurl}) {  // Or use (data) 
  console.log(fetchurl);       // or use (data.fetchurl)
  const image_base_url ="https://image.tmdb.org/t/p/original/";

  const [movies , setmovies]=useState()

  const fetchData =async()=>{
    const {data} = await instance.get(fetchurl)
    console.log("Api result");
  
    console.log("1111111111",data);
   
   const res =data.results[Math.floor(data.results.length*Math.random())] // To get Random image in the banner
   console.log(res);
   setmovies(res)
 
  }
  useEffect(()=>{
   setInterval(() => {
    fetchData()
   }, 2000);
   
  },[])
  //  useEffect(()=>{
  //   fetchData()
  //  },[])
    
  
  return (
    <>
      <div style={{backgroundImage:`url(${image_base_url}${movies?.backdrop_path})`, height:'100vh', backgroundSize:'100% 100%'}} >
        <div className="banner_content">
          <h2 style={{color:'white', fontFamily:'serif'}}>{movies?.name}</h2>
         <button className='btn btn-danger'>Play <i class="fa-solid fa-play ms-1"></i></button>
         <button className='btn btn-outline-light ms-3'>More info<i class="fa-solid fa-angle-down"></i></button>
         <h2 style={{color:'white' ,fontSize:'20px', paddingTop:'20px', fontFamily:'cursive'}}>{movies?.overview?.slice(0,300)}..</h2>


        </div>
      </div>
    </>
  )
}

export default Banner