import './styles.scss';

type Props = {
    text1: string | number | undefined;
    text2: string | number | undefined | Date;
}

const OutputCard = ({ text1, text2 }: Props) => (
    <div className="main-card">
        <h6 className="text-color1">{text1}</h6>
        <h6 className="text-color2">{text2}</h6>
    </div>
);

export default OutputCard;