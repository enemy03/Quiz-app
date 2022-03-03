const input = document.querySelector('input.input');
const inputSubmit = document.querySelector('input.submit');
const liList = document.querySelectorAll('ul li');
const quizList = ['Bedoes', 'White', 'Białas', 'Mata', 'Solar', 'Beteo', 'Jan Rapowanie', 'Kinny Zimmer', 'Janusz Walczuk', 'Adi Nowak', 'Fukaj', 'Kacperczyk', 'Lanek'];

function checkAnswer(e) {
    let index = 0;
    e.preventDefault();

    quizList.forEach(quiz => {
        if (quiz.toLowerCase() == input.value.toLowerCase()) {
            console.log(index);
            liList[index].textContent = quiz;
            liList[index].classList.add('guessed')

        }
        index++;
    })

    input.value = ''

}

inputSubmit.addEventListener('click', checkAnswer)