export function createRipple(e) {
  const el = e.currentTarget;
  const existing = el.querySelector('.ripple-wave');
  if (existing) existing.remove();

  const d = Math.max(el.clientWidth, el.clientHeight) * 2;
  const rect = el.getBoundingClientRect();

  const circle = document.createElement('span');
  circle.className = 'ripple-wave';
  circle.style.width = circle.style.height = `${d}px`;
  circle.style.left = `${e.clientX - rect.left - d / 2}px`;
  circle.style.top = `${e.clientY - rect.top - d / 2}px`;

  el.appendChild(circle);
  setTimeout(() => circle.remove(), 700);
}
