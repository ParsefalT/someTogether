import Form from "@/Form/Form";
import styles from "./Contacts.module.css";
import twit from "../../assets/twitter.svg";
import vk from "../../assets/vk.svg";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/Instagram.svg";
import Phone from "@/Phone/Phone";
const Contacts = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.contact}>
				<h2 className={styles.title}>Контактная информация</h2>
				<div className={styles.phone}>
					<Phone phone="+7 (987) 887-87" />
				</div>
				<div className={styles.place}>г. Санкт-Петербург, ул. Ленина, 9</div>
				<div>Ир, привет. Давай будем бэсти?</div>
				<ul className={styles.ul}>
					<li>
						<a href="">
							<img src={vk} alt="twivkt" className={styles.img} />
						</a>
					</li>
					<li>
						<a href="">
							<img src={facebook} alt="facebook" className={styles.img} />
						</a>
					</li>
					<li>
						<a href="">
							<img src={insta} alt="instagram" className={styles.img} />
						</a>
					</li>
					<li>
						<a href="">
							<img src={twit} alt="twit" className={styles.img} />
						</a>
					</li>
				</ul>
			</div>
			<Form />
		</div>
	);
};

export default Contacts;
