import styles from "./News.module.css";
import { INewsProps } from "./News.props";
const News = ({ text, data }: INewsProps): JSX.Element => {
	return (
		<div className={styles.news}>
			<div className={styles.text}>{text}</div>
			<div className={styles.data}>{data}</div>
			<div className={styles.border}></div>
		</div>
	);
};

export default News;
