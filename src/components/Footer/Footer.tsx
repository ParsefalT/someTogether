import Btn from "@/Btn/Btn";
import styles from "./Footer.module.css";
import Navbar from "@/Navbar/Navbar";
const Footer = (): JSX.Element => {
	const data: number = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<Btn />
			<Navbar>
				<div className={styles.footerLinks}>
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
				</div>
			</Navbar>
			<div className={styles.info}>ООО “Организация” {data}. Все права защищены</div>
		</footer>
	);
};

export default Footer;
