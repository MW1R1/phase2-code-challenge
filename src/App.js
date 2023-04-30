fetch('http://localhost:8001/bots')
import { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [botArmy, setBotArmy] = useState([]);

  const onAddBotToArmy = (botToAdd) => {
    const updatedBots = botArmy.map((bot) =>
      bot.id === botToAdd.id ? { ...bot, isEnlisted: true } : bot
    );
    if (!botToAdd.isEnlisted) {
      setBotArmy([...updatedBots, { ...botToAdd, isEnlisted: true }]);
    }
  };

  const onReleaseBotFromArmy = (botToRelease) => {
    const updatedBots = botArmy.filter((bot) => bot.id !== botToRelease.id);
    setBotArmy(updatedBots);
  };

  const onDischargeBot = (botToDischarge) => {
    fetch(`/bots/${botToDischarge.id}`, { method: "DELETE" })
      .then(() => {
        const updatedBots = botArmy.filter(
          (bot) => bot.id !== botToDischarge.id
        );
        setBotArmy(updatedBots);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <BotCollection onAddBotToArmy={onAddBotToArmy} />
      <YourBotArmy
        bots={botArmy}
        onReleaseBotFromArmy={onReleaseBotFromArmy}
        onDischargeBot={onDischargeBot}
      />
    </div>
  );
}

export default App;
