import Contacts from "../screens/Contacts/Contacts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacts")({
	component: () => <Contacts />,
});
