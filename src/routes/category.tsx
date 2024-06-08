import Main from "../screens/Main/Main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category")({
	component: () => <Main />,
});
