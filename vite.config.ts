// import { resolve } from "path";
import { defineConfig } from "vite";

// import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		// dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
	],
	// build: {
	// 	lib: {
	// 		entry: resolve(__dirname, "lib/main.ts"),
	// 		name: "renui",
	// 		fileName: "renui",
	// 		formats: ["es", "cjs"], // Ensure both formats are included
	// 	},
	// 	rollupOptions: {
	// 		external: ["react", "react-dom", "react/jsx-runtime"], // Fix typo: "react-rom" -> "react-dom"
	// 		output: {
	// 			globals: {
	// 				react: "React",
	// 				"react-dom": "ReactDOM",
	// 				"react/jsx-runtime": "jsxRuntime",
	// 			},
	// 		},
	// 	},
	// },
});
