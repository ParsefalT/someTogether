import styles from "./AboutUs.module.css";
import hub from "../../assets/hub.jpg";
const AboutUs = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Дружилюбное камьюнити!</h2>
			<a href="https://www.youtube.com/@koakoalla" target="_blank">
				<img src={hub} alt="" className={styles.img} />
			</a>
		</div>
	);
};

export default AboutUs;
