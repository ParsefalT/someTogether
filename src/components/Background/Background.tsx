import { useState, useEffect } from "react";
import backgroundL from "../../assets/backgroundL.jpg";
import backgorundM from "../../assets/backgroundM.png";
import backgroundS from "../../assets/backgroundS.png";
import styles from "./Background.module.css";
const Background = (): JSX.Element => {
	const [largeScreen, setLargeScreen] = useState<boolean>(false);
	const [mediumScreen, setMediumScreen] = useState<boolean>(false);
	const [smallScreen, setSmallScreen] = useState<boolean>(false);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth > 1024) {
				setSmallScreen(false);
				setMediumScreen(false);
				setLargeScreen(true);
			} else if (window.innerWidth > 420) {
				setSmallScreen(false);
				setLargeScreen(false);
				setMediumScreen(true);
			} else {
				setLargeScreen(false);
				setMediumScreen(false);
				setSmallScreen(true);
			}
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.background}>
			{largeScreen && <img src={backgroundL} alt="clones" />}
			{mediumScreen && <img src={backgorundM} alt="clones" />}
			{smallScreen && <img src={backgroundS} alt="clones" />}
		</div>
	);
};

export default Background;
