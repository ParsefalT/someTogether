import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../screens/AboutUs/AboutUs";

export const Route = createFileRoute("/about")({
	component: () => <AboutUs />,
});
