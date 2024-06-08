import styles from "./Main.module.css";
import { Outlet } from "@tanstack/react-router";

const Main = (): JSX.Element => {
	return (
		<>
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};

export default Main;
