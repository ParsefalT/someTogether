import Info from "@/Info/Info";
import styles from "./SelectNews.module.css";
const SelectNews = () => {
	const news: string[] = [];
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Избранные Новости</h2>
			{news ? (
				<Info
					title="Новость"
					text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt modi officia in ea quasi illum, quod, delectus cum recusandae, adipisci vel natus sint reprehenderit ut id blanditiis amet nisi necessitatibus."
				/>
			) : (
				<div className={styles.empty}>Избранные пусто</div>
			)}
		</div>
	);
};

export default SelectNews;
