document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    const question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === "8") {
        alert('Bonne réponse !');
    } else {
        alert('Mauvaise réponse. Réessaie !');
    }
});
