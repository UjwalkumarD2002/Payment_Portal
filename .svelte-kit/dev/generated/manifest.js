const c = [
	() => import("..\\components\\layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\inspector\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\inspector\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\inspector\\[groupid].svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\g\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\g\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\g\\[groupid].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/inspector/index.svelte
	[/^\/inspector\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/inspector/[groupid].svelte
	[/^\/inspector\/([^/]+?)\/?$/, [c[0], c[3], c[5]], [c[1]], (m) => ({ groupid: d(m[1])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/error.svelte
	[/^\/error\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/g/index.svelte
	[/^\/g\/?$/, [c[0], c[8], c[9]], [c[1]]],

	// src/routes/g/[groupid].svelte
	[/^\/g\/([^/]+?)\/?$/, [c[0], c[8], c[10]], [c[1]], (m) => ({ groupid: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];