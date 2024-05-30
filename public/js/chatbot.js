const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    appendMessage('user', message);
    userInput.value = '';

    fetchResponse(message)
        .then(response => response.json())
        .then(data => appendMessage('AI', data.choices[0].message.content))
        .catch(error => console.error('Error:', error));
}

function fetchResponse(message) {
    const apiKey = 'sk-proj-HO9iBGSq3w9g1wgicTcAT3BlbkFJ09fub3V1D1X49rJIwunU';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": message}]
        })
    });
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    if(sender === 'user') {
        messageElement.classList.add('message', sender, 'ChatBubble-user')
    }
    else {
        messageElement.classList.add('message', sender, 'ChatBubble-AI')
    }
    // messageElement.classList.add('message', sender , 'ChatBubble');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
