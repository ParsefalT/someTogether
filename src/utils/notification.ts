import toast from "react-hot-toast";

const notify = (fullText: [string, string]) => {
	const [text, icon] = fullText;
	toast(text, {
		duration: 1500,
		position: "top-right",
		style: {
			border: "3px solid #5d71dd",
		},
		className: "",
		icon: icon,
		iconTheme: {
			primary: "#000",
			secondary: "#fff",
		},
		ariaProps: {
			role: "status",
			"aria-live": "polite",
		},
	});
};
export { notify };
