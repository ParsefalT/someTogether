import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
	component: () => <div>Галерейка</div>,
});
