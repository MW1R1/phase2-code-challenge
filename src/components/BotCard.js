function BotCard({ bot, onReleaseBot, onDischargeBot }) {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <button onClick={() => onReleaseBot(bot)}>Release</button>
      <button onClick={() => onDischargeBot(bot)}>Discharge</button>
    </div>
  );
}

export default BotCard;
