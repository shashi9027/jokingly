"use client"

import Link from 'next/link'
 

export default function  Button({url, text}){
    return(
        <Link style={{textDecoration: "none"}} href= {`${url}`} > 
        <div   className='button'>{text}</div>
        </Link>
    )
}