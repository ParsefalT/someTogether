import PopularNews from "@/PopularNews/PopularNews";
import styles from "./Main.module.css";
import MyPagination from "@/Pagination/Pagination";
import Center from "@/Center/Center";
import Left from "@/Left/Left";
import Right from "@/Right/Right";
import Background from "@/Background/Background";

const Main = (): JSX.Element => {
	return (
		<>
			<Background />
			<main className={styles.main}>
				<section className={styles.wrapper}>
					<article className={styles.article}>
						<Center />
						<Right />
						{/* <Left /> */}
						<MyPagination />
					</article>
					<PopularNews />
				</section>
			</main>
		</>
	);
};

export default Main;
