'use client';
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import parse from 'html-react-parser'

export default function SingleItemCarousel({items})
{
    return (
        <Carousel>
            {
                items.map( (item) => <Item key={items.id} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper key={props.item.id}>
            <h2>{props.item.title.rendered}</h2>
            <div>{parse(props.item.content.rendered)}</div>

            <Button className="CheckButton">
                {props.item.meta.button_text}
            </Button>
        </Paper>
    )
}