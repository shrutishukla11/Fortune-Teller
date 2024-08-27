document.getElementById('askButton').addEventListener('click', () => {
    // Get the question from the input field
    const question = document.getElementById('questionInput').value.trim();

    // Check if the question is empty
    if (question === '') {
        document.getElementById('response').innerText = 'Please enter a question.';
        document.getElementById('response').classList.remove('hidden');
        return;
    }

    // Fetch fortune from the API
    fetch('https://noq6ghsyhd.execute-api.eu-north-1.amazonaws.com/dev/FortuneTeller')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = `Your fortune: ${data}`;
            document.getElementById('response').classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error fetching fortune:', error);
            document.getElementById('response').innerText = 'Error fetching fortune. Please try again later.';
            document.getElementById('response').classList.remove('hidden');
        });
});


