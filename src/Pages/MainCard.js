import React, { useEffect, useState } from 'react'
import Card from './Card'
import vector from '../Assets/vector.svg'
import axios from 'axios'
const MainCard = () => {
    const [res,setRes] = useState(null)
    useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
                console.log(response.data[0])
                setRes(response.data)
                // console.log(res.data[0].name)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])

    if (!res || res.length === 0) return <div>Loading...</div>  
    return (
        <div style={{zIndex:1}} className='bg-[#1B1D1F] h-auto w-full rounded-xl text-white px-28 py-20 relative '>
            <img src={vector} alt=""
            style={{zIndex:-1}}
            className='absolute xl:right-96 sm:right-0 lg:right-40 top-5'/>
            <h1 className='text-4xl text-center'>Our Collection</h1>
            <p className='mt-5 xl:w-1/2 sm:w-full lg:text-xl mx-auto text-center text-[#6F757C]'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className='mt-5 flex gap-6 mx-auto w-fit'>
                <button className='py-1 px-3 rounded-lg bg-[#6F757C]'>All Products</button>
                <button>Available Now</button>
            </div>
            <div className=' mt-10 xl:grid xl:grid-cols-3 xl:grid-rows-2 gap-x-10 gap-y-20 mx-auto w-fit sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3'>
                <Card 
                title={res[0].name} 
                price={res[0].price} 
                rating={res[0].rating} 
                votes={res[0].votes} 
                soldOut={false} 
                image={res[0].image} 
                popular={res[0].popular}
                />
                <Card 
                title={res[1].name} 
                price={res[1].price} 
                rating={res[1].rating} 
                votes={res[1].votes} 
                soldOut={false} 
                image={res[1].image} 
                popular={res[1].popular}
                />
                <Card 
                title={res[2].name} 
                price={res[2].price} 
                rating={res[2].rating} 
                votes={res[2].votes} 
                soldOut={false} 
                image={res[2].image} 
                popular={res[2].popular}
                />
                <Card 
                title={res[3].name} 
                price={res[3].price} 
                rating={res[3].rating} 
                votes={res[3].votes} 
                soldOut={false} 
                image={res[3].image} 
                popular={res[3].popular}
                />
                <Card 
                title={res[4].name} 
                price={res[4].price} 
                rating={res[4].rating} 
                votes={res[4].votes} 
                soldOut={true} 
                image={res[4].image} 
                popular={res[4].popular}
                />
                <Card 
                title={res[5].name} 
                price={res[5].price} 
                rating={res[5].rating} 
                votes={res[5].votes} 
                soldOut={false} 
                image={res[5].image} 
                popular={res[5].popular}
                />
            </div>
        </div>
    )
}

export default MainCard
