import Footer from "@/Footer/Footer";
import Header from "@/Header/Header";
import Main from "@/Main/Main";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	),
});
