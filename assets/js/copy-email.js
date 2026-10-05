document.querySelectorAll('[data-copy-email]').forEach((button) => {
  const status = button.parentElement.querySelector('.profile-email__status');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent = 'Email copied';
    } catch {
      status.textContent = 'Please select and copy the address above';
    }
  });
});
