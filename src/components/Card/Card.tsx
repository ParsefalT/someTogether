import styles from "./Card.module.css";
import Category from "@/Category/Category";
import { ICardProps } from "./Card.props";
const Card = ({ image }: ICardProps): JSX.Element => {
	const styleBg = image
		? {
				backgroundImage: `url(${image})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}
		: undefined;
	return (
		<div className={styles.wrapper} style={styleBg}>
			<Category text="Категория 1" color="white" />
			<div className={styles.text}>ITAM&SAMDay – самая настоящая удача!</div>
			<div className={styles.data}>13 дек 2020</div>
		</div>
	);
};

export default Card;
