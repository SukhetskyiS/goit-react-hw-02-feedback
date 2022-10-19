export default function FeedbackOptions({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) {
  return (
    <div
      style={{
        height: '100px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
}
