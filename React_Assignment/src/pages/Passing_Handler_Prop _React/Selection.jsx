import React from 'react'

const Selection = (props) => {

    const { applyColor, nextBackground } = props;
    console.log(nextBackground);

    return (
        <div className='fix-box' onClick={applyColor} style={nextBackground}>Selection</div>
    )
}

export default Selection