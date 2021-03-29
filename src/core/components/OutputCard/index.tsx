import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const OutputCard = ({ text }: Props) => (
    <div className="main-card">
        <h6 className="text-color1">{text}</h6>
    </div>
);

export default OutputCard;