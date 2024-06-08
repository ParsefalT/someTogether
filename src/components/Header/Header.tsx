import Navbar from "@/Navbar/Navbar";
import styles from "./Header.module.css";
import Phone from "@/Phone/Phone";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { Switch } from "antd";
const Header = (): JSX.Element => {
	const link = window.location.pathname;
	const [isShow, setShow] = useState<boolean>(true);
	const showHamburger = (event: MouseEvent<HTMLSpanElement>) => {
		if (event.currentTarget.previousElementSibling !== null) {
			setShow(false);
			event.currentTarget.previousElementSibling.classList.add(styles.navLinks_show);
		}
	};

	const hideHamburger = (event: MouseEvent<HTMLSpanElement>) => {
		console.log(event.target);
		if (event.currentTarget.previousElementSibling !== null) {
			setShow(true);
			event.currentTarget.previousElementSibling.classList.remove(styles.navLinks_show);
		}
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerWrapper}>
					<Switch className={styles.btn} defaultChecked={true} />
					<div className={styles.navLinks}>
						<Navbar>
							<li>
								<Link
									to="/"
									className={clsx(styles.link, {
										[styles.active]: link == "/",
									})}
								>
									Главная
								</Link>
							</li>
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
									to="/contacts"
									className={clsx(styles.link, {
										[styles.active]: link == "/contacts",
									})}
								>
									Контакты
								</Link>
							</li>
							<li>
								<Link
									to="/search"
									className={clsx(styles.link, {
										[styles.active]: link == "/search",
									})}
								>
									Поиск
								</Link>
							</li>
						</Navbar>
						<Phone phone="+7 (987) 887-87" />
					</div>
					{isShow ? (
						<MenuOutlined onClick={(event) => showHamburger(event)} className={styles.burger} />
					) : (
						<CloseOutlined onClick={(event) => hideHamburger(event)} className={styles.burger} />
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
