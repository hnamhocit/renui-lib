import { resolve } from "path";
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "renui",
			fileName: "renui",
		},
		rollupOptions: {
			external: ["react", "react-rom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-rom": "ReactROM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
