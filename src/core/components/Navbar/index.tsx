import './styles.scss';

type Props = {
    text: string;
}

const Navbar = ({text}: Props) => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <h4>{text}</h4>
        </div>
    </nav>
);

export default Navbar;