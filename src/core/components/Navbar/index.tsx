import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    text: string;
}

const Navbar = ({ text }: Props) => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="text-color">
                <h4>{text}</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;