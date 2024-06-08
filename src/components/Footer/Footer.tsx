import styles from "./Footer.module.css";
import Navbar from "@/Navbar/Navbar";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { Switch } from "antd";
const Footer = (): JSX.Element => {
	const data: number = new Date().getFullYear();
	const link = window.location.pathname;

	return (
		<footer className={styles.footer}>
			<Switch className={styles.btn} defaultChecked={true} />
			<Navbar>
				<div className={styles.footerLinks}>
					<li>
						<Link
							to="/about"
							className={clsx(styles.link, {
								[styles.active]: link == "/about",
							})}
						>
							О нас
						</Link>
					</li>
					<li>
						<Link
							to="/gallery"
							className={clsx(styles.link, {
								[styles.active]: link == "/gallery",
							})}
						>
							Галерея
						</Link>
					</li>
					<li>
						<Link
							to="/news"
							className={clsx(styles.link, {
								[styles.active]: link == "/news",
							})}
						>
							Новости
						</Link>
					</li>
					<li>
						<Link
							to="/contacts"
							className={clsx(styles.link, {
								[styles.active]: link == "/contacts",
							})}
						>
							Контакты
						</Link>
					</li>
				</div>
			</Navbar>
			<div className={styles.info}>ООО “Организация” {data}. Все права защищены</div>
		</footer>
	);
};

export default Footer;
