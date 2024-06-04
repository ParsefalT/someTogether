import { PhoneOutlined } from "@ant-design/icons";
import styles from "./Phone.module.css";
import { IPhone } from "./Phone.props";
const Phone = ({ phone }: IPhone): JSX.Element => {
	return (
		<div className={styles.blockPhone}>
			<PhoneOutlined className={styles.phoneImg} />
			<a href={`tel:${phone}`} className={styles.phone}>
				{phone}
			</a>
		</div>
	);
};

export default Phone;
