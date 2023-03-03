import { React } from 'react'

import '../../styles/PageTitle/PageTitle.css';


export default function PageTitle() {

    return (
        <div className='PageTitle'>
            <h1 className='title'>Bonjour <span className='titleUser'>Thomas</span></h1>
            <h2 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}