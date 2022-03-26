'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.get = void 0;
const os_1 = __importDefault(require('os'));
async function get(ctx) {
	const info = {
		version: os_1.default.platform() + '-' + os_1.default.arch() + '(' + os_1.default.release() + ')',
		loadavg: os_1.default.loadavg(),
		totalmem: os_1.default.totalmem(),
		freemem: os_1.default.freemem(),
	};
	await ctx.sendJson(info);
}
exports.get = get;
//# sourceMappingURL=echo.js.map
