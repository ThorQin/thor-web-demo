'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.get = void 0;
async function get(ctx) {
	await ctx.render('about.html', {
		serverInfo: process.env,
	});
}
exports.get = get;
//# sourceMappingURL=about.js.map
