import { useState, useEffect } from "react";

function BotCollection({ onAddBotToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.bot_class}</p>
            <button
              onClick={() => onAddBotToArmy(bot)}
              disabled={bot.isEnlisted}
            >
              {bot.isEnlisted ? "Enlisted" : "Enlist"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
