import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import Not_Found404 from "./screens/Not_Found404/Not_Found404";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: () => {
		return <Not_Found404 />;
	},
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
