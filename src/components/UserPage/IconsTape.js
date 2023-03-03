import { React } from 'react'
import { Link } from 'react-router-dom'
import { MdSelfImprovement } from 'react-icons/md';
import { IoMdBicycle, IoMdFitness } from "react-icons/io";
import { BiSwim } from "react-icons/bi";

import '../../styles/IconsTape/IconsTape.css'


export default function IconsTape() {

    return (
        <div className='iconsTape iconsTape_dimensions iconsTape_aspect'>
            <nav id="second-nav" className='menu2 menu2_dimensions' aria-label="Secondary navigation" role="navigation">
                <Link className='menu-link2 menu-link2_dimensions menu-link2_aspect' to="/" onClick={ (event) => event.preventDefault() }>
                    <MdSelfImprovement />
                </Link>
                <Link className='menu-link2 menu-link2_dimensions menu-link2_aspect' to="/" onClick={ (event) => event.preventDefault() }>
                    <BiSwim />
                </Link>
                <Link className='menu-link2 menu-link2_dimensions menu-link2_aspect' to="/" onClick={ (event) => event.preventDefault() }>
                    <IoMdBicycle />
                </Link>
                <Link className='menu-link2 menu-link2_dimensions menu-link2_aspect' to="/" onClick={ (event) => event.preventDefault() }>
                    <IoMdFitness />
                </Link>
            </nav>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    )
}