/*
Napraviti HTML stranu koja ima jedan input box tipa number, koji prima brojeve od 2-6 
i jedan select koji ima 3 boje – plavu, crvenu i zelenu, i jedan button – run.

Napisati program koji klikom na dugme “run” iscrtava za uneti ceo broj x iz opsega [2,6] 
x^2 broj kvadrata u izabranoj boji, preko celog HTML. 
Dijagonalu od leve gornje, do donje desne strane bojiti uvek u zutoj boji.
*/

var divContainer = document.querySelector('.divC');
var btn = document.querySelector('button');
btn.addEventListener('click', draw);

function draw() {
    var selectedColor = document.querySelector('select').value;
    var size = document.querySelector('input').value;
    divContainer.innerHTML = "";
    if (size > 1 && size <= 6) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                var divSquare = document.createElement('div');
                divSquare.tagName = "div";
                divSquare.className = "div1";
                divSquare.style.background = selectedColor;
                divContainer.setAttribute('style', 'grid-template-columns: repeat(' + size + ', 1fr)');
               // divContainer.setAttribute('style', 'grid-template-rows: repeat(' + size + ', 1fr)');
                if (i === j) {
                    divSquare.style.background = 'yellow';
                }
                divContainer.appendChild(divSquare);
            }
        }
    }
    else {
        alert('Morate uneti broj izmedju 1 i 6');
    }
}