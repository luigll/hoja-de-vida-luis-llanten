// Vista previa de imagen con validación
const inputImagen = document.getElementById('imagen');
const preview = document.getElementById('preview');

inputImagen.addEventListener('change', () => {
  const file = inputImagen.files[0];
  if (file) {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecciona un archivo de imagen válido.');
      inputImagen.value = '';
      preview.style.display = 'none';
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = 'none';
    preview.src = '';
  }
});

// Evitar recarga de formularios
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulario enviado (simulado)');
  });
});

// Menú lateral
const btnMenu = document.getElementById('btnMenu');
const sidebar = document.getElementById('sidebar');
const closeMenu = document.getElementById('closeMenu');

btnMenu.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
