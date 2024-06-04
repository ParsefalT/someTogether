import Button from "@/Button/Button";
import styles from "./InputSearch.module.css";
const InputSearch = (): JSX.Element => {
	return (
		<div className={styles.wrapperSearch}>
			<input className={styles.inputSearch} type="text" placeholder="Введите что-нибудь" />
			<Button search="Найти" />
		</div>
	);
};

export default InputSearch;
