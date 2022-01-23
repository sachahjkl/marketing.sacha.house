export function onClickOutside(
	e: Event,
	enabler: HTMLElement,
	container: HTMLElement,
	effect: () => void
): void {
	{
		let parent = e.target as HTMLElement;
		if (parent === enabler || parent == null) return;
		while (parent !== document.body) {
			if (parent === container) return;
			if (!parent.parentElement) return;

			parent = parent.parentElement;
		}
		effect();
	}
}
