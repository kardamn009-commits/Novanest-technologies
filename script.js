function sendMessage(){

    let input = document.getElementById("userInput").value.toLowerCase();

    let chat = document.getElementById("chatMessages");

    chat.innerHTML += `<p><b>You:</b> ${input}</p>`;

    let reply = "";

    if(input.includes("hello") || input.includes("hi")){
        reply = "👋 Hello! Welcome to NovaNest Technologies.";
    }

    else if(input.includes("services")){
        reply = "💼 We provide Website Development, AI Solutions, Mobile Apps and Digital Marketing.";
    }

    else if(input.includes("contact")){
        reply = "📞 Phone: +91 9058490531 <br> 📧 Email: info@novanest.tech";
    }

    else if(input.includes("price")){
        reply = "💰 Our plans start from ₹4,999.";
    }

    else if(input.includes("ai")){
        reply = "🤖 We build AI Chatbots, AI Automation and AI Voice Assistants.";
    }

    else{
        reply = "🤖 Sorry, I don't understand that yet.";
    }

    chat.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

    document.getElementById("userInput").value = "";

    chat.scrollTop = chat.scrollHeight;
}
