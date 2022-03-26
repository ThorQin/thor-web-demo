import { DefaultContext } from 'thor-web/dist/types';

export async function get(ctx: DefaultContext): Promise<void> {
	await ctx.render('about.html', {
		serverInfo: process.env,
	});
}
