import Category from "@/Category/Category";
import styles from "./Info.module.css";
import { IInfoProps } from "./Info.props";
import clsx from "clsx";
const Info = ({ text, title, s, m }: IInfoProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Category text="Категория 1" color="blue" />
				<div>data</div>
			</div>
			<h2
				className={clsx(styles.title, {
					[styles.m]: m,
					[styles.s]: s,
				})}
			>
				{title}
			</h2>
			{text && <div className={styles.text}>{text}</div>}
		</div>
	);
};

export default Info;
