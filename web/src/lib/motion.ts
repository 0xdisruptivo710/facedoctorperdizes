/**
 * Motion helpers shared across sections.
 * DESIGN.md §4
 */

/** Subtle parallax via rAF. Targets all elements matching selector. */
export function initParallax(selector = '.img-parallax', intensity = 0.1): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const images = document.querySelectorAll<HTMLElement>(selector);
  if (!images.length) return;

  const tick = () => {
    const vh = window.innerHeight;
    for (const img of images) {
      const parent = img.parentElement;
      if (!parent) continue;
      const rect = parent.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const distance = (center - vh / 2) * intensity;
        img.style.transform = `translateY(calc(-10% + ${distance}px)) scale(1.05)`;
      }
    }
    requestAnimationFrame(tick);
  };
  tick();
}
