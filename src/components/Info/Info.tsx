import Category from "@/Category/Category";
import styles from "./Info.module.css";
import { IInfoProps } from "./Info.props";
import clsx from "clsx";
import { StarOutlined } from "@ant-design/icons";
import { MouseEvent, useState } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/notification";

const Info = ({ text, title, s, m }: IInfoProps) => {
	const [selectNew, setSelectNew] = useState(false);

	function handleSelectNew(event: MouseEvent) {
		const target = event.target as HTMLElement;
		target.classList.toggle(styles.add);
		if (target.classList.contains(styles.add)) {
			notify(["Вы добавили новость", "✅"]);
		} else {
			notify(["Вы удалил новость", "⚠️"]);
		}
		setSelectNew((prev) => !prev);
	}

	return (
		<div className={styles.wrapper}>
			<StarOutlined className={styles.star} onClick={(event) => handleSelectNew(event)} />
			<div className={styles.header}>
				<Category text="Категория 1" />
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
			<Toaster />
		</div>
	);
};

export default Info;
