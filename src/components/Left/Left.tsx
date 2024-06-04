import Card from "@/Card/Card";
import Info from "@/Info/Info";
import styles from "./Left.module.css";
const Left = () => {
	return (
		<div className={styles.wrapper}>
			<Card />
			<div className={styles.info}>
				<Info
					s={true}
					title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
					text=""
				/>
				<Info
					s={true}
					title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
					text=""
				/>
			</div>
		</div>
	);
};

export default Left;