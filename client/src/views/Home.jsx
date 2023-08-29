import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import background from '../assets/dod.avif'
import InfiniteSlider from '../components/InfiniteSlider'
import '../styles/Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import data from '../data/text/data.json'

function Home() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box  >
                    <img
                        src={background}
                        width='100%'
                        height='auto'
                    />
                    {/* <Typography >
                        Welcome to the AutoHaven!!
                    </Typography> */}
                </Box>
                <br />
                <InfiniteSlider />
                {/* Slider */}
                <center>
                    <Box sx={{ width: '100%', backgroundColor: 'black' }} >
                        <Slider {...settings}>
                            {data.map((data, index) => (
                                <Box sx={{ paddingX: '20px' }}>
                                    <div key={index}>
                                        <img
                                            src={data.img}
                                            width='40%'
                                            height='auto'
                                        />
                                        <Typography sx={{ color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '25px', fontWeight: 'bold' }}>{data.title}</Typography>
                                        <Typography sx={{ color: 'white', fontFamily: ' Raleway, sans-serif' }}>{data.description}</Typography>
                                    </div>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </center>

            </Box >
        </>
    )
}

export default Home