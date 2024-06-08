import InputSearch from "@/InputSearch/InputSearch";
import styles from "./Search.module.css";
import Info from "@/Info/Info";
import { useState } from "react";
const Search = () => {
	const [data, setData] = useState(false);
	return (
		<div className={styles.search}>
			{/* <InputSearch /> */}
			<h3 className={styles.title}>Результаты поиска</h3>
			{data ? <Info title="blabla" text="lorem" /> : <div className={styles.text}>ничего не найдено</div>}
		</div>
	);
};

export default Search;
