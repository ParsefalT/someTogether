import Center from "@/Center/Center";
import Left from "@/Left/Left";
import MyPagination from "@/Pagination/Pagination";
import Right from "@/Right/Right";
import styles from "./Article.module.css";
const Article = () => {
	return (
		<article className={styles.article}>
			<Center />
			<Right />
			<Left />
			<MyPagination />
		</article>
	);
};

export default Article;
