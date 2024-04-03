const allIcons = document.querySelectorAll('.question_tab_icon');

allIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
        const img = event.target;
        const answer = event.currentTarget.parentElement.parentElement

        if(answer.hidden === true){
            img.src = './assets/images/icon-plus.svg';
            answer.hidden = true;

        } else if(answer.hidden === false){
            img.src = './assets/images/icon-minus.svg';
            answer.hidden = false;
        }

        const container = event.currentTarget.parentElement.parentElement;
        container.querySelector('.answer').hidden = false;
    })
})


