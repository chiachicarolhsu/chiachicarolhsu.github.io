document.querySelectorAll('.publication-card').forEach((card) => {
  const details = card.querySelector('details');
  const summary = details.querySelector('summary');
  let pinned = false;
  card.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') details.open = true;
  });
  card.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && !pinned) details.open = false;
  });
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    pinned = !pinned;
    details.open = pinned;
  });
});
