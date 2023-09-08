"use client"
import { usePathname, useRouter } from 'next/navigation'
import {Router} from 'next/router'
const CategoryList = ({data}) =>{
   const pathName = usePathname();
   const pathSegments = pathName.split('/');
   const path = pathSegments[pathSegments.length - 1];
   const router = useRouter()
    return(
        <div className="left-list">
           
           {data?.map((val, index)=>{
              return(
                <div  onClick={()=>  router.push(`/info/${val}`)} className= {`item ${path == val && "active"}`} key={index+"list"}>
                    {val}
                </div>
              )
           })}
        
        </div>
    )
}

export default CategoryList