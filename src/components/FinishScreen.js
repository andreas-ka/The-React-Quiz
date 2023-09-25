function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👌";
  if (percentage >= 30 && percentage < 50) emoji = "😢";
  if (percentage === 0) emoji = "🙈";
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}
        %) <span>{emoji}</span>
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
