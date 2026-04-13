import React, { useState } from "react";

function AIChatbot() {

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {

      const res = await fetch("/api/ai/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: userMessage.text
        })

      });

      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply
      };

      setMessages(prev => [...prev, botMessage]);

    } catch {

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Error connecting to AI"
        }
      ]);

    }

    setLoading(false);

  };

  return (

    <>

      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center text-xl transition"
      >
        💬
      </button>


      {/* Chat Window */}

      {isOpen && (

        <div className="fixed bottom-24 right-5 w-80 h-[450px] bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}

          <div className="bg-black text-white text-center py-3 font-semibold tracking-wide">
            ✂️ Salon AI Assistant
          </div>


          {/* Messages */}

          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`px-3 py-2 rounded-xl max-w-[80%] text-sm shadow
                ${msg.sender === "user"
                    ? "bg-black text-white self-end"
                    : "bg-gray-200 text-black self-start"
                  }`}
              >
                {msg.text}
              </div>

            ))}

            {loading && (

              <div className="text-gray-400 text-sm italic">
                AI is typing...
              </div>

            )}

          </div>


          {/* Input */}

          <div className="flex border-t">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about hairstyle..."
              className="flex-1 px-3 py-2 outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-black hover:bg-gray-800 text-white px-4 text-sm transition"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>

  );

}

export default AIChatbot;