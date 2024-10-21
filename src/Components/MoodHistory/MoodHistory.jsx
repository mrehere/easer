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

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const sortedMood = moodEmoji.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  return (
    <section className="moodHistory">
      <h4 className="moodHistory__title">Mood History</h4>

      {sortedMood.map((mood) => {
        return (
          <div className="moodHistory__container" key={mood.createdAt}>
            <p className="moodHistory__date">
              Logged on: {formatDate(mood.createdAt)}
            </p>
            <p className="moodHistory__mood">{mood.emoji}</p>
            <p className="moodHistory__name">{mood.moodName}</p>
          </div>
        );
      })}
    </section>
  );
}

export default MoodHistory;
