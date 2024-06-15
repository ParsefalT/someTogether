import Card from "@/Card/Card";
import Info from "@/Info/Info";
import styles from "./Left.module.css";
import { ILeftProps } from "./ILeft.props";
const Left = ({ image }: ILeftProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Card image={image} color="white" />
			<div className={styles.info}>
				<Info
					s={true}
					title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
				/>
				<Info s={true} title="ITAM&SAMDay – самая настоящая удача!" />
			</div>
		</div>
	);
};

export default Left;
