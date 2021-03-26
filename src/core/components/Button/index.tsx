import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-config">
            <h5 className="text-content">{text}</h5>
        </button>
    </div>
);

export default Button;