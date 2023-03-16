export const inputNewWalk = async (walkData) => {
  console.log(walkData, process.env.REACT_APP_BASE_URL);
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}input_exercise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(walkData),
  });
  const data = await res.json();
  return data;
};
