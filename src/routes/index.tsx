import { createFileRoute } from "@tanstack/react-router";
import Main from "../screens/Main/Main";

export const Route = createFileRoute("/")({
	component: () => <Main />,
});
