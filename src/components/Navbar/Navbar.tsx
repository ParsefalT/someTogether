import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";
import Btn from "@/Btn/Btn";
import { MouseEvent, useState } from "react";
import Phone from "@/Phone/Phone";

const Navbar = (): JSX.Element => {
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
		<div className={styles.navbar}>
			<Btn />
			<div className={styles.navLinks}>
				<nav>
					<ul className={styles.ul}>
						<li>
							<a href="/">Главная</a>
						</li>
						<li>
							<a href="">О Нас</a>
						</li>
						<li>
							<a href="">Контакты</a>
						</li>
						<li>
							<a href="">Поиск</a>
						</li>
					</ul>
				</nav>
				<Phone phone="+7 (987) 887-87" />
			</div>
			{isShow ? (
				<MenuOutlined onClick={(event) => showHamburger(event)} className={styles.burger} />
			) : (
				<CloseOutlined onClick={(event) => hideHamburger(event)} className={styles.burger} />
			)}
		</div>
	);
};

export default Navbar;
