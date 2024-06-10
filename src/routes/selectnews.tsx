import { createFileRoute } from "@tanstack/react-router";
import SelectNews from "../screens/SelectNews/SelectNews";

export const Route = createFileRoute("/selectnews")({
	component: () => <SelectNews />,
});
