// Charger le fichier JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    function showQuestion(index) {
      const questionData = data[index];
      const questionContainer = document.getElementById('question-container');
      
      questionContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, i) => {
          return `
            <label>
              <input type="radio" name="answer" value="${option}">
              ${option}
            </label><br>
          `;
        }).join('')}
      `;
    }

    // Afficher la première question
    showQuestion(currentQuestionIndex);

    // Ajouter un écouteur d'événements pour le bouton "Soumettre"
    document.getElementById('submit-button').addEventListener('click', () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        currentQuestionIndex++;
        
        if (currentQuestionIndex < data.length) {
          showQuestion(currentQuestionIndex);
        } else {
          showResult();
        }
      } else {
        alert("Veuillez sélectionner une réponse.");
      }
    });

    function showResult() {
      let score = 0;
      data.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
          score++;
        }
      });

      document.getElementById('question-container').style.display = 'none';
      document.getElementById('submit-button').style.display = 'none';
      document.getElementById('result-container').style.display = 'block';
      document.getElementById('result-container').innerHTML = `
        <h2>Votre score : ${score} sur ${data.length}</h2>
      `;
    }

    // Afficher le bouton "Soumettre"
    document.getElementById('submit-button').style.display = 'inline';
  })
  .catch(error => console.error('Erreur lors du chargement du quiz:', error));
