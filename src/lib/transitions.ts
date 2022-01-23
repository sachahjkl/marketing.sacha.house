import type { TransitionConfig } from 'svelte/transition';

interface TypewriterParams {
	speed: number;
	delay: number;
}

export function typewriter(
	node: Node,
	{ speed = 50, delay = 0 }: TypewriterParams
): TransitionConfig {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}
	const text = node.textContent;
	const duration = text.length * speed;

	return {
		delay,
		duration,
		tick: (t: number) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
