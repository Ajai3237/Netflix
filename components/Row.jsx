import React, { useEffect, useState } from 'react'
import instance from '../src/Instance';
import "../components/Row.css"

function Row({title ,fetchurl}) {
  console.log(title);
  console.log(fetchurl);
  const image_base_url ="https://image.tmdb.org/t/p/original/";

  const [allMovies , setallMovies]=useState()

  const fetchData = async()=>{
    const response = await instance.get(fetchurl)
    console.log("response",response);
  setallMovies(response.data.results)

  }
 useEffect(()=>{
  fetchData()
 },[])
  console.log("all movies",allMovies);
  
  return (
    <>
    <div className="row">
      <h3>{title}</h3>
      <div className="movies_row">
        {
          allMovies?.map(item=> (
            <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt="" height={"250px"}/>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Row