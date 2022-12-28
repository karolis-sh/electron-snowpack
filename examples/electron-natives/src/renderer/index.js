const FORM_DATA_KEY = 'form-x';

const previewData = (data) => {
  document.getElementById('storage').innerText = JSON.stringify(data, null, 2);
};

window._preload_.storage.get(FORM_DATA_KEY, (error, data) => {
  if (error) throw error;

  previewData(data);

  Object.entries(data).forEach(([key, value]) => {
    const el = document.getElementById(key);
    if (el) el.value = value;
  });
});

window.submit_form = (form) => {
  const data = Array.from(new FormData(form).entries()).reduce(
    (prev, [key, value]) => ({ ...prev, [key]: value }),
    {},
  );

  window._preload_.storage.set(FORM_DATA_KEY, data, (error) => {
    if (error) {
      window._preload_.dialog.showErrorBox(
        'Oh snap',
        'Failed to save form data',
      );
    } else {
      previewData(data);
      window._preload_.dialog.showMessageBox({ message: 'Form data saved' });
    }
  });

  return false;
};

window.clear_data = () => {
  window._preload_.storage.clear();
  window.location.reload();
};
