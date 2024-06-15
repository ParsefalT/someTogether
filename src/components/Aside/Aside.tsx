import Button from "@/Button/Button";
import styles from "./Aside.module.css";
import News from "@/News/News";
const Aside = (): JSX.Element => {
	return (
		<div className={styles.aside}>
			<h1 className={styles.title}>Популярные новости</h1>
			<div className={styles.news}>
				<News data="###" text="ITAM&SAMDay – самая настоящая удача!" />
				<News
					data="###"
					text="Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ..."
				/>
				<News
					data="###"
					text="Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?"
				/>
			</div>
			<div className={styles.subscribe}>
				<h3 className={styles.subTitle}>Подписка на рассылку</h3>
				<form action="" className={styles.subscribeForm}>
					<input type="email" placeholder="Email@gmail.com" name="email" required className={styles.input} />
					<Button send="Подписаться" />
				</form>
			</div>
		</div>
	);
};

export default Aside;
