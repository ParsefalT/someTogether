import Card from "@/Card/Card";
import styles from "./Right.module.css";
import Info from "@/Info/Info";
const Right = () => {
	return (
		<div className={styles.wrapper}>
			<Info
				text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
				title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
			/>
			<Card />
		</div>
	);
};

export default Right;
