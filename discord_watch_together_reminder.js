const fetch = require('node-fetch');

DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1380403994383483001/dm3FtVxvUEBCG2liSUs2G3TpBk68_2nr18zLBPaURnqUgouIkzloL7LxtCBDiV-Pvm34"

fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        content: "Hello from the bot!"
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
