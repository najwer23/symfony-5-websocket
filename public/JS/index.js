window.onload = () => {

    const socket = new WebSocket("ws://localhost:3210");
    const sendBtn = document.querySelector("#sendBtn")
    const chat = document.querySelector("#chat");

    socket.onopen = (e) => {
        document.querySelector("#chat").innerHTML += "<div class='message'>Connected with server</div>";
    };

    socket.onclose = (e) => {
        if (!event.wasClean) {
            document.querySelector("#chat").innerHTML += "<div class='message'>Connection died</div>"; 
        }
    };
    
    addMessage = (name, message) => {
        const messageHTML = "<div class='message'><strong><i>" + name + "</i>: </strong>" + message + "</div>";
        chat.innerHTML += messageHTML;
        chat.scrollTop = chat.scrollHeight;
    }

    socket.onmessage = (e) => {
        try {
            const message = JSON.parse(e.data);
            addMessage(message.name, message.message);
        } catch (e) {
            console.log("Unexpected error! https://xkcd.com/2110/")
        }
    };

    sendBtn.addEventListener("click", () => {
        let message = {
            name: document.querySelector("#name").value,
            message: document.querySelector("#message").value
        };
        if (socket.readyState === socket.OPEN) {
            socket.send(JSON.stringify(message));
            addMessage(message.name, message.message);
        }      
    });
}