import Background from "@/Background/Background";
import Article from "@/Article/Article";
import Aside from "@/Aside/Aside";
import styles from "./Main.module.css";
import Category from "@/Category/Category";

const Main = () => {
	const path = window.location.pathname;
	return (
		<>
			{path == "/" ? (
				<Background />
			) : (
				<div className={styles.category}>
					<Category text="Категория 1" />
				</div>
			)}
			<section className={styles.wrapper}>
				<Article />
				<Aside />
			</section>
		</>
	);
};

export default Main;
