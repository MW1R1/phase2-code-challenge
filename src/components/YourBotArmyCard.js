function YourBotArmy({ bots, onReleaseBotFromArmy, onDischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map((bot) => (
          <YourBotArmyCard
            key={bot.id}
            bot={bot}
            onReleaseBotFromArmy={onReleaseBotFromArmy}
            onDischargeBot={onDischargeBot}
          />
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
