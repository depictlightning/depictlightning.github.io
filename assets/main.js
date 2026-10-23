// 意象模块：黄蝴蝶。只在桌面且允许动效时创建，避免给移动端增加粒子。
const motionOK = !matchMedia('(prefers-reduced-motion: reduce)').matches;
const butterflyField = document.querySelector('.butterfly-field');
if (motionOK && matchMedia('(min-width: 761px)').matches && butterflyField) {
  const wings = document.createDocumentFragment();
  for (let i = 0; i < 36; i += 1) {
    const butterfly = document.createElement('span');
    butterfly.className = 'butterfly-particle';
    butterfly.style.setProperty('--x', `${(i * 37.7) % 100}%`);
    butterfly.style.setProperty('--delay', `${-((i * 11.3) % 36)}s`);
    butterfly.style.setProperty('--duration', `${25 + (i % 7) * 3}s`);
    butterfly.style.setProperty('--size', `${5 + (i % 4) * 2}px`);
    wings.append(butterfly);
  }
  butterflyField.append(wings);
}

// 意象模块：羊皮卷逐行浮现。无 JS、无观察器或减少动效时文字保持可见。
if (motionOK && 'IntersectionObserver' in window) {
  const lines = document.querySelectorAll('.reveal-line');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  lines.forEach((line) => observer.observe(line));
  document.documentElement.classList.add('has-reveal');
}
