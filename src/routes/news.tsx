import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
	component: () => <div>Hello /news!</div>,
});
