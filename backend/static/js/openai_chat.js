document.addEventListener("DOMContentLoaded", function() {
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message');
  
    chatForm.onsubmit = function(e) {
        e.preventDefault(); 

        const message = messageInput.value.trim();
        if(message === '') return; 
        messageInput.value = ''; 

        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('chat-message', 'user-message');
        userMessageElement.textContent = `You: ${message}`;
        chatBox.appendChild(userMessageElement);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        fetch('/openai_process_chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            // Create and append the OpenAI's response to the chat box
            const aiMessageElement = document.createElement('div');
            aiMessageElement.classList.add('chat-message', 'ai-message');
            aiMessageElement.textContent = `AI: ${data.response}`;
            chatBox.appendChild(aiMessageElement);

            // Scroll to the bottom of the chat box
            chatBox.scrollTop = chatBox.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
});
