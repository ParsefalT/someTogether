import { IParagraph } from "./P.props";

const P = ({ text }: IParagraph): JSX.Element => {
	return <p>{text}</p>;
};

export default P;
