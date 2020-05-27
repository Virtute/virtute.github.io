const startButton = document.querySelector('#start');
const content = document.querySelector('#content');
console.log(startButton);

function printManyDoms() {
  content.innerHTML += "dom ellis ";
};

startButton.addEventListener('click', () => {
  setInterval(printManyDoms, 50);
});
