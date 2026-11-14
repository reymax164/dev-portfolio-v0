import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 5;

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;

    const dots = Array.from(trail.children) as HTMLDivElement[];
    const points = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));
    let target = { x: 0, y: 0 };
    let frameId: number | null = null;
    let initialized = false;

    const animate = () => {
      let isSettled = true;

      points.forEach((point, index) => {
        const follow = index === 0 ? target : points[index - 1];
        const easing = index === 0 ? 0.45 : 0.28;
        point.x += (follow.x - point.x) * easing;
        point.y += (follow.y - point.y) * easing;

        if (Math.abs(follow.x - point.x) > 0.1 || Math.abs(follow.y - point.y) > 0.1) {
          isSettled = false;
        }

        dots[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      });

      if (isSettled) {
        frameId = null;
      } else {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

      const targetElement = event.target;
      if (targetElement instanceof Element && targetElement.closest('input, textarea, [contenteditable="true"]')) {
        trail.classList.remove('is-visible');
        return;
      }

      target = { x: event.clientX, y: event.clientY };
      trail.classList.add('is-visible');

      if (!initialized) {
        points.forEach((point, index) => {
          point.x = target.x;
          point.y = target.y;
          dots[index].style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
        });
        initialized = true;
      }

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const hideTrail = () => trail.classList.remove('is-visible');
    const handlePointerOut = (event: MouseEvent) => {
      if (!event.relatedTarget) hideTrail();
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mouseout', handlePointerOut);
    window.addEventListener('blur', hideTrail);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseout', handlePointerOut);
      window.removeEventListener('blur', hideTrail);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={trailRef} className="cursor-trail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }, (_, index) => (
        <span key={index} className={`cursor-trail__dot cursor-trail__dot--${index}`} />
      ))}
    </div>
  );
}
