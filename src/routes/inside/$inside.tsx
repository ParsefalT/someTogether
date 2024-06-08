import InsidePage from "../../screens/InsidePage/InsidePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inside/$inside")({
	component: () => <InsidePage />,
});
