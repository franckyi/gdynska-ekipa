'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function StatsAnimation({stats}) {
    const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            gsap.to('.box', { x: 360 }); // <-- automatically reverted
        },
        { scope: container }
    ); // <-- scope is for selector text (optional)

    return (
        <div className="stats-animation">
            <div>{stats.meta.years}</div>   
            <div>{stats.meta.projects}</div>   
            <div>{stats.meta.cities}</div>   
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div> 
        </div>
    )
}