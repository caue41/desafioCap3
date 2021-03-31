import React from 'react';
import './styles.scss';

type Props = {
    text1: string | number | undefined;
    text2: string | number | undefined;
    text3: string | number | undefined;
    text4: string | number | undefined;
    text5: string | number | undefined;
    text6: string | number | undefined;
}

const OutputCardHeader = ({ text1, text2, text3, text4, text5, text6 }: Props) => (
    <div className="main-display">
        <div className="card-header-config1">
            <h6 className="text-config1">{text1}</h6>
            <h6 className="text-config2">{text4}</h6>
        </div>
        <div className="card-header-config2">
            <h6 className="text-config1">{text2}</h6>
            <h6 className="text-config2">{text5}</h6>
        </div>
        <div className="card-header-config3">
            <h6 className="text-config1">{text3}</h6>
            <h6 className="text-config2">{text6}</h6>
        </div>
    </div>
);

export default OutputCardHeader;