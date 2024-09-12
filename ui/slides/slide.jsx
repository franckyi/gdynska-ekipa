'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { fontSecondary } from '@/ui/fonts'
import './slide.css'
import Image from 'next/image'

export default function Slide({items})
{
    return (
        <Carousel
            navButtonsAlwaysVisible="true"
            navButtonsProps={{ // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    padding: '6px',    // 1
                    color: 'white'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: '#d97706' // 2
                }
            }}
        >
            {
                items.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const heading = props.item.title.rendered;
    const description = props.item.meta.description;
    const drawing = props.item.meta.drawing;
    const photo = props.item.meta.photo;
    const descClasses = `slide-description text-lg italic ${fontSecondary.className}`;
    const btnText = props.item.meta.button_text;
    const btnClasses = "slide-button inline-block px-20 py-4 border-amber-600 hover:bg-amber-600 border hover:border-white"
    
    return (
        <div className="slide-container" key={props.item.id}>
            <div className="slide-images">
                <Image className="slide-drawing transition-all duration-[4000ms]" width="640" height="640" src={drawing} alt="" />
                <Image className="slide-photo opacity-10 xl:opacity-30" width="480" height="480" src={photo} alt={heading} />
            </div>
            <div className="slide-text lg:translate-x-[20%] p-4 md:p-0 top-[140px] 2xl:top-0">
                <h2 className="slide-heading text-4xl lg:text-8xl ml-0 lg:ml-auto">{heading}</h2>
                <p className={`my-8 xl:my-12 ml-0 md:ml-auto ${descClasses}`}>{description}</p>
                <a className={btnClasses} href="/o-nas#uslugi">
                    {btnText}
                </a>
            </div>
        </div>
        
    )
}