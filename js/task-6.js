function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.buttonCreate.addEventListener('click', createEl);
refs.buttonDestroy.addEventListener('click', destroyEl);

function createEl() {
  const amount = Number(refs.input.value);
  if (amount > 0 && amount <= 100) {
    destroyEl();
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      refs.boxes.append(box);
    }
  }
}

function destroyEl() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}
