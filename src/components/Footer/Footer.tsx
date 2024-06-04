import Btn from "@/Btn/Btn";
import styles from "./Footer.module.css";
const Footer = (): JSX.Element => {
	const data = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<Btn />
			<nav>
				<ul className={styles.ul}>
					<li>
						<a href="/">О нас</a>
					</li>
					<li>
						<a href="">Галерея</a>
					</li>
					<li>
						<a href="">Новости</a>
					</li>
					<li>
						<a href="">Контакты</a>
					</li>
				</ul>
			</nav>
			<div className={styles.info}>ООО “Организация” {data}. Все права защищены</div>
		</footer>
	);
};

export default Footer;
