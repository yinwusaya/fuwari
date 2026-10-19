import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "vite";

test("CSS minifier is explicitly installed and builds CSS", async () => {
	const config = await readFile(
		new URL("../astro.config.mjs", import.meta.url),
		"utf8",
	);
	const cssMinify = config.match(/cssMinify:\s*"([^"]+)"/)?.[1];
	const pkg = JSON.parse(
		await readFile(new URL("../package.json", import.meta.url), "utf8"),
	);
	assert.equal(cssMinify, "esbuild");
	assert.ok(pkg.dependencies?.esbuild || pkg.devDependencies?.esbuild);
	const result = await build({
		configFile: false,
		logLevel: "silent",
		build: { cssMinify, write: false, rollupOptions: { input: "test.css" } },
		plugins: [
			{
				name: "test-css",
				resolveId: (id) => (id === "test.css" ? id : null),
				load: (id) => (id === "test.css" ? "body { color: red; }" : null),
			},
		],
	});
	assert.ok(
		result.output.some(
			(asset) =>
				asset.type === "asset" &&
				asset.fileName.endsWith(".css") &&
				String(asset.source).includes("color:red"),
		),
	);
});
