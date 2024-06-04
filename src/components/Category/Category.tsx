import styles from "./Category.module.css";
import { ICategoryProps } from "./ICategory.props";
import clsx from "clsx";
const Category = ({ text, color }: ICategoryProps): JSX.Element => {
	return (
		<div
			className={clsx(styles.category, {
				[styles.white]: color == "white",
				[styles.blue]: color == "blue",
			})}
		>
			{text}
		</div>
	);
};

export default Category;
