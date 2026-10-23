// 意象模块：黄蝴蝶从右侧拱门的冰附近出现，只游移到画框边缘；移动端保留前 4 只。
const butterflyField = document.querySelector('.butterfly-field');
if (butterflyField) {
  const wings = document.createDocumentFragment();
  for (let i = 0; i < 12; i += 1) {
    const butterfly = document.createElement('span');
    butterfly.className = 'butterfly-particle';
    butterfly.style.setProperty('--x', `${74 + (i * 7) % 9}%`);
    butterfly.style.setProperty('--x-mobile', `${46 + (i * 7) % 13}%`);
    butterfly.style.setProperty('--y', `${55 + (i * 5) % 13}%`);
    butterfly.style.setProperty('--delay', `${-(i * 7.1)}s`);
    butterfly.style.setProperty('--duration', `${36 + (i % 4) * 4}s`);
    butterfly.style.setProperty('--size', `${6 + (i % 3) * 2}px`);
    wings.append(butterfly);
  }
  butterflyField.append(wings);
}
