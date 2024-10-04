async function sendMessage() {
    const userMessage = document.getElementById('message').value;
    const response = await fetch('your-backend-api-url/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: userMessage })
    });
    const data = await response.json();
    document.getElementById('response').textContent = data.response;
}
