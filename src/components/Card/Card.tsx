import styles from "./Card.module.css";
import Category from "@/Category/Category";
const Card = () => {
	return (
		<div className={styles.wrapper}>
			<Category text="Категория 1" color="white" />
			<div className={styles.text}>ITAM&SAMDay – самая настоящая удача!</div>
			<div className={styles.data}>13 дек 2020</div>
		</div>
	);
};

export default Card;
