import { React } from 'react'

import '../../styles/UserMainDataCard/UserMainDataCard.css'


export default function UserMainDataCard({ title, name, symbol, color }) {

    return (
        <div className='userMainDataCard userMainDataCard_dimensions userMainDataCard_aspect'>
            <div className={'userDataCard userDataCard_dimensions userDataCard_borders userDataCard' + color}>
                {symbol}
            </div>
            <div className='userDataCard-text userDataCard-text_dimensions'>
                <h2 className='userDataCard-title'>{title}</h2>
                <h3 className='userDataCard-name'>{name}</h3>
            </div>
        </div>
    )
}