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
  return (
    <section className="moodHistory">
      <h4 className="moodHistory__title">Mood History</h4>

      <div className="moodHistory__container">
        <p className="moodHistory__date">Logged on: Monday, October 21, 2024</p>
        <p className="moodHistory__mood">😊</p>
        <p className="moodHistory__name">Joyful</p>
      </div>
    </section>
  );
}

export default MoodHistory;
