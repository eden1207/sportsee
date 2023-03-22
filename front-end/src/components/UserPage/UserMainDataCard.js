import React from 'react'
import PropTypes from 'prop-types';

import '../../styles/UserMainDataCard/UserMainDataCard.css'


/*-- Function displaying the main informations on the right
    such as the calories rates and so on --*/

export default function UserMainDataCard({ symbol, color, title, name }) {

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

UserMainDataCard.propTypes = {
    symbol: PropTypes.element,
    color: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string
}