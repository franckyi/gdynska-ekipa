'use client';
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import parse from 'html-react-parser'
import { fontSecondary } from '../fonts';

export default function SingleItemCarousel({items})
{
    return (
        <Carousel>
            {
                items.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const title = props.item.title.rendered;
    const description = parse(props.item.content.rendered);
    const descClasses = `text-lg italic ${fontSecondary.className}`;

    return (
        <div key={props.item.id}>
            <h2>{title}</h2>
            <div className={descClasses}>{description}</div>
            <button>
                {props.item.meta.button_text}
            </button>
        </div>
    )
}