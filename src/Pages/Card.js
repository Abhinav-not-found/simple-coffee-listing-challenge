import React, { useState } from 'react'
import star  from '../Assets/Star_fill.svg'
import star2  from '../Assets/Star.svg'
const Card = ({image,title,price,rating,votes,soldOut,popular}) => {
    return (
        <div className='w-72 h-60  rounded-xl'>
            <div style={{
                backgroundImage:`url(${image})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center'
            }} className='h-48 w-full bg-green-400 rounded-xl pt-2 pl-2' >
                {popular ? <p className='bg-[#F6C768] text-sm text-black w-fit py-1 px-4 rounded-full'>Popular</p> :<></>}
                
            </div>
            <div className='flex justify-between mt-3'>
                <h1 className='text-lg'>{title}</h1>
                <p className='text-black text-sm font-semibold rounded-md bg-[#BEE3CC] py-1 p-2'>{price}</p>
            </div>
            <div className='flex justify-between mt-2 ' >
                <div className='flex gap-1'>
                    {rating ? <div className='flex gap-1'><img src={star} alt="" /><p>{rating} <span className='text-[#6F757C]'>({votes} votes)</span></p></div>  : <div className='flex gap-1'><img src={star2} /> <p className='text-[#6F757C]' >No rating</p></div>}

                    
                </div>
                {soldOut ? <p className='text-[#ED735D]'>Sold out</p> : <></>}
                
            </div>
        </div>
    )
}

export default Card
