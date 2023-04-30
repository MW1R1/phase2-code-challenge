function YourBotArmy({ bots, onReleaseBotFromArmy, onDischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.bot_class}</p>
            <button onClick={() => onReleaseBotFromArmy(bot)}>Release</button>
            <button onClick={() => onDischargeBot(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
