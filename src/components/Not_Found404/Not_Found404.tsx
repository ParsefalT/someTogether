import not_foundL from "../../assets/404L.png";
import not_foundM from "../../assets/404M.png";
import not_foundS from "../../assets/404S.png";
import backArrow from "../../assets/backArrow.svg";
import styles from "./Not_Found404.module.css";
const Not_Found404 = (): JSX.Element => {
	return (
		<div className={styles.error}>
			<picture>
				<source srcSet={not_foundS} media="(max-width:620px)" type="image/png" />
				<source srcSet={not_foundM} media="(max-width:1400px)" type="image/png" />
				<img src={not_foundL} alt="not_found404" />
			</picture>
			<h2 className={styles.textError}>Что-то пошло не так...</h2>
			<a href="/" className={styles.back}>
				<img src={backArrow} alt="backArrow" /> Вернуться назад
			</a>
		</div>
	);
};

export default Not_Found404;
