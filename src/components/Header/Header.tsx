import Navbar from "@/Navbar/Navbar";
import styles from "./Header.module.css";
import Background from "@/Background/Background";
const Header = (): JSX.Element => {
	return (
		<>
			<header className={styles.header}>
				<Navbar />
			</header>
			<Background />
		</>
	);
};

export default Header;
