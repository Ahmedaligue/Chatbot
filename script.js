const questionInput = document.getElementById('question');
const askButton = document.getElementById('ask-btn');
const answerDiv = document.getElementById('answer');

askButton.addEventListener('click', async () => {
    const question = questionInput.value.trim();
    if (question === '') return;

    try {
        const response = await fetch(`https://zan-antidev.vercel.app/api/powerbrain/ask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        const answer = data.answer;

        answerDiv.innerHTML = `<p>${answer}</p>`;
    } catch (error) {
        console.error(error);
        answerDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
