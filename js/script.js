const openDialogButton = document.getElementById('open-dialog');
  const dialog = document.getElementById('my-dialog');
  const closeDialogButton = document.getElementById('close-dialog');

  openDialogButton.addEventListener('click', () => {
    dialog.showModal(); // Відкрити діалогове вікно
  });

  closeDialogButton.addEventListener('click', () => {
    dialog.close(); // Закрити діалогове вікно
  });