import styles from "./InsidePage.module.css";
import test from "../../assets/backgroundL.jpg";
import PopularNews from "@/PopularNews/PopularNews";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import insideJpg from "../../assets/inside.jpg";
import insdeSmall from "../../assets/insideSmall.png";
import Category from "@/Category/Category";
import P from "@/P/P";
const InsideBlock = () => {
	return (
		<div className={styles.insideBlock}>
			<img src={test} alt="" className={styles.img} />
			<section className={styles.wrapper}>
				<div className={styles.news}>
					<div className={styles.category}>
						<Category color="blue" text="Категория 1" />
						<span>data</span>
					</div>
					<h2>Управление ИТ-активами – скучная рутина или творческая задача?</h2>
					<div className={styles.main}>
						<P
							text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной
							компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив
							проверить, нужен ли он вообще. Выждав несколько дней, он пришёл к руководителю и спросил: «Похоже тот
							отчёт, который я готовлю, не особо востребован, а что вам действительно нужно?» Руководитель признался,
							что массивный отчёт хороший, но им не пользуются. И набросал на листе бумаги то, что хотелось бы иметь под
							рукой."
						/>
						<br />
						<P
							text="Управление ИТ-активами, как и управление конфигурациями, является базовым процессом для других. В первом
							случае более важным является финансовый аспект, во втором – эксплуатационные задачи. Оба процесса можно
							перегрузить деталями и превратить во что-то рутинное. Как же найти баланс и сделать процесс по-настоящему
							«живым»?"
						/>
						<div className={styles.textBlock}>
							<div className={styles.order2}>
								<P
									text="Управление ИТ-активами, как и управление конфигурациями, является базовым процессом для других. В
									первом случае более важным является финансовый аспект, во втором – эксплуатационные задачи. Оба
									процесса можно перегрузить деталями и превратить во что-то рутинное. Как же найти баланс и сделать
									процесс по-настоящему «живым»?"
								/>
								<br />
								<P
									text="Управление ИТ-активами, как и управление конфигурациями, является базовым процессом для других. В
									первом случае более важным является финансовый аспект, во втором – эксплуатационные задачи. Оба
									процесса можно перегрузить деталями и превратить во что-то рутинное. Как же найти баланс и сделать
									процесс по-настоящему «живым»?"
								/>
							</div>
							<div className={styles.order1}>
								<img className={styles.smallImg} src={insdeSmall} alt="" />
								<P
									text="Учёт из рутины может превратиться в интересную задачу, своего рода «вызов» по переходу на новый
									уровень."
								/>
							</div>
						</div>
					</div>

					<img src={insideJpg} alt="" className={styles.img} />
					<div className={styles.btnBlock}>
						<div className={styles.arrow}>
							<img src={backArrow} alt="backArrow" />
							<a className={styles.link}>Предыдущая новость</a>
						</div>
						<div className={styles.arrow}>
							<a className={styles.link}>Следующая новость</a>
							<img src={forwardArrow} alt="forwardArrow" />
						</div>
					</div>
				</div>
				<PopularNews />
			</section>
		</div>
	);
};

export default InsideBlock;
