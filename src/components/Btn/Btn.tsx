import { Switch } from "antd";
import styles from "./Btn.module.css";
const onChange = (checked: boolean) => {
	console.log(`switch to ${checked}`);
};

const Btn = (): JSX.Element => {
	return <Switch className={styles.btn} defaultChecked={true} onChange={onChange} />;
};

export default Btn;
