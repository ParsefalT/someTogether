import styles from "./Button.module.css";
import searchSvg from "../../assets/search.svg";
import planeSvg from "../../assets/planeR.svg";
import reloadSvg from "../../assets/reload.svg";
import { IButtonProps } from "./Button.props";
import cl from "clsx";

const Button = ({ search, send, reload }: IButtonProps): JSX.Element => {
	return (
		<>
			{search && (
				<button className={cl([styles.btn, styles.search])}>
					{search} <img src={searchSvg} alt="search" />
				</button>
			)}
			{send && (
				<button className={cl([styles.btn, styles.send])}>
					{send} <img src={planeSvg} alt="search" />
				</button>
			)}
			{reload && (
				<button className={cl([styles.btn, styles.reload])}>
					{reload} <img src={reloadSvg} alt="reload" />
				</button>
			)}
		</>
	);
};

export default Button;
