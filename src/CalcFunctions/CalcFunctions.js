export const userLevel = (data) => {
  const sum = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.steps,
    0
  );
  return Math.floor(sum / 10000);
};

export const totalSteps = (data) => {
  const totalSteps = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.steps,
    0
  );
  return totalSteps;
};

export const totalWalks = (data) => {
  const totalWalks = data.filter((exercise) => {
    return exercise.type === "walk";
  });
  return totalWalks.length;
};

export const totalHoursWalked = (data) => {
  const walks = data.filter((exercise) => {
    return exercise.type === "walk";
  });

  const totalHoursWalked = walks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.duration;
  }, 0);
  return Math.floor(totalHoursWalked / 60);
};

export const caloriesBurnt = (data) => {
  const totalCalories = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.calories;
  }, 0);
  return totalCalories;
};

export const totalDistance = (data) => {
  const totalKm = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.distance;
  }, 0);
  return totalKm;
};
