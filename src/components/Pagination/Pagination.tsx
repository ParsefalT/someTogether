import { Pagination, type PaginationProps, Button } from "antd";
import styles from "./Pagination.module.css";
const ItemPagination: PaginationProps["itemRender"] = (_, type, originalElement) => {
	if (type === "prev") {
		return (
			<Button type="text" className={styles.btn}>
				Предыдущая
			</Button>
		);
	}
	if (type === "next") {
		return (
			<Button type="text" className={styles.btn}>
				Следующая
			</Button>
		);
	}
	return originalElement;
};

// export default ItemPagination;

const MyPagination = (): JSX.Element => {
	return (
		<Pagination
			className={styles.pagination}
			defaultCurrent={1}
			total={100}
			itemRender={ItemPagination}
			showQuickJumper={false}
			showSizeChanger={false}
		/>
	);
};

export default MyPagination;
