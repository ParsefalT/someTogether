import styles from "./Form.module.css";
const Form = () => {
	return (
		<div className={styles.blockForm}>
			<h4 className={styles.titleForm}>Напишите нам</h4>
			<form action="" className={styles.form}>
				<input className={styles.input} required type="text" name="name" id="" placeholder="Ваше имя" />
				<input className={styles.input} required type="text" name="phone" id="" placeholder="Телефон или E-mail" />
				<textarea className={styles.textarea} name="message" id="" placeholder="Сообщение"></textarea>
				<button className={styles.btn}>Отправить</button>
			</form>
		</div>
	);
};

export default Form;
