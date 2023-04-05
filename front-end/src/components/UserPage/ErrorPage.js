import React from 'react'

import '../../styles/UserPage/UserPage.css'

import Header from './Header'
import IconsTape from './IconsTape'


/** 
 * Function ErrorPage used to display an error message if the data is not provided
 * 
 * Header is a component displaying the header
 * 
 * IconTape displays the vertical black tape with icons
 */


export default function ErrorPage() {

    return (
        <div className='Userpage Userpage_dimensions'>
            <Header />
            <div className='Main Main_dimensions'>
                <IconsTape />
                <div className='PageContent'>
                    <h2 className='ErrorMessage'>Oups, une erreur s'est produite !</h2>      
                </div>
            </div>
        </div>
    )
}