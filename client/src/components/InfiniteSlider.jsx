import { Box } from '@mui/material'
import React from 'react'
import car1 from '../assets/carBrands/Alfa-Romeo-Logo-removebg-preview.png'
import car2 from '../assets/carBrands/AMG-Logo-removebg-preview.png'
import car3 from '../assets/carBrands/Aston-Martin-Logo-removebg-preview.png'
import car4 from '../assets/carBrands/audi.png'
import car5 from '../assets/carBrands/Bentley-Logo-removebg-preview.png'
import car6 from '../assets/carBrands/BMW-Logo-removebg-preview.png'
import car7 from '../assets/carBrands/Bugatti-Logo-removebg-preview.png'
import car8 from '../assets/carBrands/Ferrari-Logo-removebg-preview.png'
import car9 from '../assets/carBrands/Fiat-Logo-removebg-preview.png'
import car10 from '../assets/carBrands/Ford-Logo-removebg-preview.png'
import car11 from '../assets/carBrands/Tesla-Logo-removebg-preview.png'
import car12 from '../assets/carBrands/Toyota-Logo-removebg-preview.png'

export default function InfiniteSlider() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <div className='wrapper'>
                    <div className='slider'>
                        <div className='slider-track'>
                            <div className='slide' /* style={{ width: { xs: '100px', md: '250px' } }} */>
                                <img src={car1} />
                            </div>
                            <div className='slide'>
                                <img src={car2} />
                            </div>
                            <div className='slide'>
                                <img src={car3} />
                            </div>
                            <div className='slide'>
                                <img src={car4} />
                            </div>
                            <div className='slide'>
                                <img src={car5} />
                            </div>
                            <div className='slide'>
                                <img src={car6} />
                            </div>
                            <div className='slide'>
                                <img src={car7} />
                            </div>
                            <div className='slide'>
                                <img src={car8} />
                            </div>
                            <div className='slide'>
                                <img src={car9} />
                            </div>
                            <div className='slide'>
                                <img src={car10} />
                            </div>
                            <div className='slide'>
                                <img src={car11} />
                            </div>
                            <div className='slide'>
                                <img src={car12} />
                            </div>
                        </div>
                    </div>
                </div>
            </Box>

        </>
    )
}
