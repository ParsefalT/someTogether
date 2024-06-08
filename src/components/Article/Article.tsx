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
			<Left image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F8%2Ff%2F6%2F619867.jpg&f=1&nofb=1&ipt=6d20895c33176978d24d7ef0ae770ac427b300ba2a6c898ddc310794b9e22a95&ipo=images" />
			<Right />
			<Left image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uHd-5oRCX7FoNiyXGvaKvAHaEK%26pid%3DApi&f=1&ipt=b7a830460b2502545d56ecf9ab7c2f5953b29846e63bfb5555db8aedd459dfdf&ipo=images" />
			<MyPagination />
		</article>
	);
};

export default Article;
