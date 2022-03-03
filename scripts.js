const input = document.querySelector('input.input');
const inputSubmit = document.querySelector('input.submit');
const liList = document.querySelectorAll('ul li');
const h3 = document.querySelector('.content h3');
const ulList = document.querySelector('.quizList ul')
const btnNextQuiz = document.querySelector('.quizList button.nextQuiz');
const quizList = ['Bedoes', 'White', 'Białas', 'Mata', 'Solar', 'Beteo', 'Jan Rapowanie', 'Kinny Zimmer', 'Janusz Walczuk', 'Adi Nowak', 'Fukaj', 'Kacperczyk', 'Lanek'];
const quizList2 = ['Malik Montana', 'Diho', 'Alberto', 'Josef Bratan', 'Bibić', 'Kronkel Dom'];

function checkAnswer1(e) {
    let index = 0;
    e.preventDefault();

    quizList.forEach(quiz => {
        if (quiz.toLowerCase() == input.value.toLowerCase()) {
            liList[index].textContent = quiz;
            liList[index].classList.add('guessed')

        }
        index++;
    })

    input.value = ''

}

function nextQuiz() {

    h3.textContent = 'Give a polish rappers from GM2L';
    for (let i = 0; i < 14; i++) {
        ulList.lastChild.remove()
    }
    liList.forEach(li => {
        li.textContent = '';
        li.classList.remove('guessed')
    })
    btnNextQuiz.removeEventListener('click', nextQuiz);
    inputSubmit.removeEventListener('click', checkAnswer1)
}

function checkAnswer2(e) {
    let index = 0;
    e.preventDefault();

    quizList2.forEach(quiz => {
        if (quiz.toLowerCase() == input.value.toLowerCase()) {
            liList[index].textContent = quiz;
            liList[index].classList.add('guessed')

        }
        index++;
    })

    input.value = ''
}

inputSubmit.addEventListener('click', checkAnswer1);
btnNextQuiz.addEventListener('click', nextQuiz);
inputSubmit.addEventListener('click', checkAnswer2);