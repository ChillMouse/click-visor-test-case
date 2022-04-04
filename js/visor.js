/// Модуль по отслеливанию кликов на сайте

let block = document.getElementById('square');  // Выбираем элемент для управления

// let speed = 2;

function moveBlock(event) {
    const e = event || event.window; // Получаем объект события
    let x = e.clientX;
    let y = e.clientY;  // Достаём координаты
    console.log(x, y);
    let widthBlock = block.offsetWidth / 2;  // получаю половину ширины и высоты элемента
    let heightBlock = block.offsetHeight / 2;
    block.style.left = `${x - widthBlock}px`;  // Устанавливаю новые координаты для объекта
    block.style.top = `${y - heightBlock}px`;
}

document.addEventListener('mousedown', moveBlock);  // Событие на весь документ, чтобы ловить клики

// function moveBlockUp() {
//     console.info(block.style.top);
//     block.style.top = `${block.offsetTop + speed}px`;
//     console.info(block.style.top);
// }
//
// function moveBlockDown() {
//     console.info(block.style.top);
//     block.style.top = `${block.offsetTop - speed}px`;
//     console.info(block.style.top);
// }
// function moveBlockLeft() {
//     console.info(block.style.left);
//     block.style.left = `${block.offsetLeft - speed}px`;
//     console.info(block.style.left);
// }
// function moveBlockRight() {
//     console.info(block.style.left);
//     block.style.left = `${block.offsetLeft + speed}px`;
//     console.info(block.style.left);
// }
//
// function blockWidthUp(){
//     block.style.width = `${block.offsetWidth + 1}px`;
//     block.style.height = `${block.offsetWidth + 1}px`;
// }
// function blockWidthDown(){
//     block.style.width = `${block.offsetWidth - 1}px`;
//     block.style.height = `${block.offsetWidth - 1}px`;
// }
//
// function moveBlockByButton(KeyboardEvent) {
//     let e = KeyboardEvent;
//
//     switch (e.keyCode) {
//         case 40:
//             moveBlockUp();
//             console.log('Событие на 40')
//             break;
//
//         case 38:
//             moveBlockDown();
//             console.log('Событие на 38')
//             break;
//         case 37:
//             moveBlockLeft();
//             break;
//         case 39:
//             moveBlockRight();
//             break;
//         case 16:
//             speed++;
//             break;
//         case 87:
//             blockWidthUp();
//             break;
//         case 83:
//             blockWidthDown();
//             break;
//         case 17:
//             speed--;
//             break;
//     }
//     console.log(e.keyCode);
// }
//
// document.addEventListener('keydown', moveBlockByButton);