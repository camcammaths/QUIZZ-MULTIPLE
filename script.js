// On attend que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const quizQuestionsContainer = document.getElementById("quiz-questions");
    const quizResultContainer = document.getElementById("quiz-result");

    // Charger les questions JSON
    const questions = [
        {
            "text": "Quelle est la solution de l'équation 2x + 3 = 7 ?",
            "options": ["x = 1", "x = 2", "x = 3"],
            "correctAnswer": "x = 2"
        },
        {
            "text": "Combien de côtés a un triangle équilatéral ?",
            "options": ["2", "3", "4"],
            "correctAnswer": "3"
        },
        {
            "text": "Quel est le résultat de 5 x 8 ?",
            "options": ["40", "35", "45"],
            "correctAnswer": "40"
        },
        {
            "text": "Combien d'heures y a-t-il dans 3 jours ?",
            "options": ["48", "72", "36"],
            "correctAnswer": "72"
        },
        {
            "text": "Quel est le périmètre d'un rectangle de 5 cm et 10 cm ?",
            "options": ["30 cm", "40 cm", "50 cm"],
            "correctAnswer": "30 cm"
        }
    ];

    // Générer les questions dans le HTML
    let questionsHtml = '';
    questions.forEach((question, index) => {
        questionsHtml += `
            <div class="question">
                <p>${question.text}</p>
                ${question.options.map(option => {
                    return `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label>`;
                }).join('')}
            </div>
        `;
    });
    quizQuestionsContainer.innerHTML = questionsHtml;

    // Gérer la soumission du quiz
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let score = 0;

        // Vérifier les réponses
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === question.correctAnswer) {
                score++;
            }
        });

        // Afficher le résultat
        quizResultContainer.textContent = `Vous avez obtenu ${score} sur ${questions.length} bonnes réponses.`;
    });
});
