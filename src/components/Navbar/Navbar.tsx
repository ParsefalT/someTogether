import styles from "./Navbar.module.css";
import { INavbarProps } from "./Navbar.props";

const Navbar = ({ children }: INavbarProps): JSX.Element => {
	return (
		<nav>
			<ul className={styles.ul}>{children}</ul>
		</nav>
	);
};

export default Navbar;
