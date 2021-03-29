import React from 'react';
import './styles.scss';

type Props = {
    text1: string;
    text2: string;
    text3: string;
}

const OutputCardHeader = ({ text1, text2, text3 }: Props) => (
    <div className="main-display">
        <div className="card-header-config1">
            <h6 className="text-config1">{text1}</h6>
        </div>
        <div className="card-header-config2">
            <h6 className="text-config1">{text2}</h6>
        </div>
        <div className="card-header-config3">
            <h6 className="text-config1">{text3}</h6>
        </div>
    </div>
);

export default OutputCardHeader;