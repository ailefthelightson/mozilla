


// first chunk creates the message "p" - no idea what this other stuff is

function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'you clicked the button';
    document.body.appendChild(para);

}
//assigning shit to the button 

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', createParagraph);
    
}