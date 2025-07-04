const fetch = require('node-fetch');

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const MESSAGE_TO_SEND = process.env.MESSAGE_TO_SEND;

if (!DISCORD_WEBHOOK_URL) {
    console.error('DISCORD_WEBHOOK_URL environment variable is not set');
    process.exit(1);
}

if (!MESSAGE_TO_SEND) {
    console.error('MESSAGE_TO_SEND environment variable is not set');
    process.exit(1);
}

fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        content: MESSAGE_TO_SEND
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error("failed to send message");
    }
    return response;
})
.then(data => {
    console.log("Message sent successfully:", data);
})
.catch(error => {
    console.error("Error sending message:", error);
});
