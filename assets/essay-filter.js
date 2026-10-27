const filters = document.querySelector('.essay-filters');

if (filters) {
  const buttons = filters.querySelectorAll('button[data-tag]');
  const list = document.querySelector('#essay-list');
  const entries = list.querySelectorAll('.entry');
  const empty = document.querySelector('.essay-filter-empty');

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-tag]');
    if (!button || !filters.contains(button)) return;

    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    entries.forEach((entry) => {
      entry.hidden = Boolean(button.dataset.tag) && entry.dataset.tag !== button.dataset.tag;
      if (!entry.hidden) visible += 1;
    });
    list.hidden = visible === 0;
    empty.hidden = visible !== 0;
  });

  filters.hidden = false;
}
