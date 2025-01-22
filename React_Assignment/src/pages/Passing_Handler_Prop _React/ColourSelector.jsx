import React from 'react';

const ColourSelector = (props) => {
    const { config, setNextBackground } = props;

    return (
        <button className={config.classname} onClick={() => setNextBackground({ background: config.background })}>
            {config.label}
        </button>
    )
}
export default ColourSelector;