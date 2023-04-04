export const generateExercise = async (text) => {
  const res = await fetch(
    process.env.REACT_APP_BASE_URL + "exercise_recommendation",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    }
  );

  const data = await res.json();
  console.log(data);
  return data[0].message.content;
};
