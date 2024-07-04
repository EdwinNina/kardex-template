document.addEventListener('DOMContentLoaded', () => {

  const addButton = document.getElementById('addButton'),
    inputsContainer = document.getElementById('inputsContainer'),
    inputTemplate = document.getElementById('inputRowTemplate');

  let rowCounter = 0
  addButton.addEventListener('click', addRowToContainer);

  function addRowToContainer() {
    const fragment = document.createDocumentFragment()
    const newRow = document.importNode(inputTemplate.content, true);
    rowCounter++;
    newRow.querySelector('.rowCounter').textContent = rowCounter

    newRow.querySelector('.removeRow').addEventListener('click', function() {
      this.closest('.rowTable').remove()
      updateCounter()
    });

    fragment.appendChild(newRow);
    inputsContainer.appendChild(fragment);
    updateCounter()
  }

  function updateCounter() {
    const rows = inputsContainer.querySelectorAll('.rowTable');
    rows.forEach((row, index) => {
      const rowCounter = index + 1
      row.querySelector('.rowCounter').textContent = rowCounter
      row.querySelector('.nro_registro').name = `registros[${rowCounter}][nro_registro]`
      row.querySelector('.tipo_documento').name = `registros[${rowCounter}][tipo_documento]`
      row.querySelector('.cant_fojas').name = `registros[${rowCounter}][cant_fojas]`
      row.querySelector('.nro_escalafon').name = `registros[${rowCounter}][nro_escalafon]`
    })
  }

  addRowToContainer()
})