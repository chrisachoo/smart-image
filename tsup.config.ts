import { defineConfig } from "tsup"

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	minify: true,
	outDir: "dist",
	sourcemap: true,
	target: "esnext"
})
