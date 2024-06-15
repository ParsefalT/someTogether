import styles from "./ArticleBlock.module.css";
import Card from "@/Card/Card";
import { IArticleBlockProps } from "./ArticleBlock.props";
import Info from "@/Info/Info";
import clsx from "clsx";

const ArticleBlock = ({ image, center, left, right }: IArticleBlockProps): JSX.Element => {
	return (
		<>
			{center && (
				<Info
					m={true}
					title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
					text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
				/>
			)}
			{left && (
				<div className={clsx(styles.wrapper, styles.left)}>
					<Card image={image} color="white" />
					<div className={styles.info}>
						<Info
							s={true}
							title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
						/>
						<Info s={true} title="ITAM&SAMDay – самая настоящая удача!" />
					</div>
				</div>
			)}
			{right && (
				<div className={clsx(styles.wrapper, styles.right)}>
					<Info
						text="Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще."
						title="Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ..."
					/>
					<Card color="white" />
				</div>
			)}
		</>
	);
};

export default ArticleBlock;
