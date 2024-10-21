import "./MoodHistory.scss";

function MoodHistory() {
  const moods = [
    {
      userId: "12345",
      moodId: "m2",
      moodName: "content",
      createdAt: 1727962226189,
    },
    {
      userId: "12345",
      moodId: "m1",
      moodName: "joyful",
      createdAt: 1729171826189,
    },
    {
      userId: "12345",
      moodId: "m5",
      moodName: "crying",
      createdAt: 1727357426189,
    },
  ];

  const moodMap = {
    joyful: "😊",
    content: "🙂",
    confused: "😕",
    angry: "😠",
    crying: "😢",
  };

  const moodEmoji = moods.map((mood) => ({
    ...mood,
    emoji: moodMap[mood.moodName] || "❓",
  }));

  console.log(moodEmoji);
  return (
    <section className="moodHistory">
      <h4 className="moodHistory__title">Mood History</h4>

      {moodEmoji.map((mood) => {
        return (
          <div className="moodHistory__container" key={mood.createdAt}>
            <p className="moodHistory__date">Logged on: {mood.createdAt}</p>
            <p className="moodHistory__mood">{mood.emoji}</p>
            <p className="moodHistory__name">{mood.moodName}</p>
          </div>
        );
      })}
    </section>
  );
}

export default MoodHistory;
