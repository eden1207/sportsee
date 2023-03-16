import { React } from 'react'
import PropTypes from 'prop-types';

import '../../styles/PageTitle/PageTitle.css';


export default function PageTitle({ name }) {

    return (
        <div className='PageTitle'>
            <h1 className='title'>Bonjour <span className='titleUser'>{name}</span></h1>
            <h2 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}

PageTitle.propTypes = {
    name: PropTypes.string
}