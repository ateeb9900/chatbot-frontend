async function sendMessage() {
    const userMessage = document.getElementById('message').value;

    const response = await fetch('https://sturdy-giggle-wwjgp4g7xxjh9g5p-3000.app.github.dev/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: userMessage })
    });

    const data = await response.json();
    document.getElementById('response').textContent = data.response;
}

