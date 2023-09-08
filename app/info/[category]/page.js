"use client"

import JokesCard from "@/components/jokes-card"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import axios from "axios"

export default function CategoryJokes(){
    
    const pathName = usePathname();
   const pathSegments = pathName.split('/');
   const path = pathSegments[pathSegments.length - 1];
   const [list, setList] = useState()
   
 async function  getJokesByCategories (){
    const response = await axios({
        method: 'GET',
  url: 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/jokes-by-category',
  params: {
    limit: '100',
    page: '1',
    category: `${path}`,
    sortBy: 'score:desc'
  },
  headers: {
    'X-RapidAPI-Key': 'c5984c5d3dmshe0a7047bea91414p1e0d2cjsndeca1e48648d',
    'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
  }
    }); // Replace with your API endpoint
    const data = response.data;
   setList(data)
   }

    useEffect(()=>{
     getJokesByCategories()
    }, [path])
   
    return(
        <div>
            <div className="main-heading display-center" style={{margin: "50px 0px 30px 0px"}}>
            Jokes on {path}
            </div>
            <div style={{display:"flex", flexWrap: "wrap", justifyContent: "center", gap:"30px", bottom: "10px"}}>
            
            {list?.results?.map((val)=>{
                return(
                    <JokesCard data={val}/> 
                )
            })}
             </div>
            
        </div>
    )
}