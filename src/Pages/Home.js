import React from 'react'
import backgroundImage from '../Assets/bg-cafe.jpg'
import MainCard from './MainCard'
const Home = () => {
    return (
        <div 
        style={{backgroundImage:`url(${backgroundImage})`,
            backgroundPosition:'top',
            backgroundSize:'100% 300px',
            backgroundRepeat:'no-repeat'
        }} 
        className='h-full bg-[#111315] px-20 py-40 '
        >
            <MainCard></MainCard>
        </div>
    )
}

export default Home
