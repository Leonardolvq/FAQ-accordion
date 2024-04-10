const allQuestions = document.querySelectorAll('.question_and_answer_container');

allQuestions.forEach((question) => {
    question.addEventListener('click', (event) => {
        const icon = question.querySelector('.answer')
        const image = event.currentTarget.querySelector('.question_tab_icon')
        icon.classList.toggle('answer_active')
        console.log(event.currentTarget)
        
        if (icon.classList.contains('answer_active')){
            image.src = ("./assets/images/icon-minus.svg")
        } else {
            image.src = ("./assets/images/icon-plus.svg")
        }
    })
})
