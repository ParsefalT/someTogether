import Navbar from "@/Navbar/Navbar";
import styles from "./Header.module.css";
import Btn from "@/Btn/Btn";
import Phone from "@/Phone/Phone";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, MouseEvent } from "react";
const Header = (): JSX.Element => {
	const [isShow, setShow] = useState<boolean>(true);
	const showHamburger = (event: MouseEvent<HTMLSpanElement>) => {
		if (event.currentTarget.previousElementSibling !== null) {
			setShow(false);
			event.currentTarget.previousElementSibling.classList.add(styles.navLinks_show);
		}
	};
	const hideHamburger = (event: MouseEvent<HTMLSpanElement>) => {
		if (event.currentTarget.previousElementSibling !== null) {
			setShow(true);
			event.currentTarget.previousElementSibling.classList.remove(styles.navLinks_show);
		}
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerWrapper}>
					<Btn />
					<div className={styles.navLinks}>
						<Navbar>
							<li>
								<a href="/">Главная</a>
							</li>
							<li>
								<a href="/">О нас</a>
							</li>
							<li>
								<a href="/">Контакты</a>
							</li>
							<li>
								<a href="/">Поиск</a>
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
