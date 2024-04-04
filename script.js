const allQuestions = document.querySelectorAll('.question_answer_container');

allQuestions.forEach((question) => {
    question.addEventListener('click', (event) => {
        const icon = question.querySelector('.answer')
        icon.classList.toggle('answer_active')
        
        // if(answer.hidden === true){
        //     img.src = './assets/images/icon-plus.svg';

        // } else if(answer.hidden === false){
        //     img.src = './assets/images/icon-minus.svg';
        // }

        // const container = event.currentTarget.parentElement.parentElement;
        // container.querySelector('.answer').hidden = false;
    })
})
