import Search from "../screens/Search/Search";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
	component: () => <Search />,
});
