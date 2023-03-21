import React, { useContext } from "react";

const HighlightContext = React.createContext();

export function useHighlights() {
  return useContext(HighlightContext);
}

export function HighlightsProvider({ children }) {
  const userLevel = (data) => {
    const sum = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.steps,
      0
    );
    return Math.floor(sum / 10000);
  };

  const totalSteps = (data) => {
    const totalSteps = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.steps,
      0
    );
    return totalSteps;
  };

  const totalWalks = (data) => {
    const totalWalks = data.filter((exercise) => {
      return exercise.type === "walk";
    });
    return totalWalks.length;
  };

  const totalHoursWalked = (data) => {
    const walks = data.filter((exercise) => {
      return exercise.type === "walk";
    });

    const totalHoursWalked = walks.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.duration;
    }, 0);
    return Math.floor(totalHoursWalked / 60);
  };

  const caloriesBurnt = (data) => {
    const totalCalories = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.calories;
    }, 0);
    return totalCalories;
  };

  const totalDistance = (data) => {
    const totalKm = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.distance;
    }, 0);
    return totalKm;
  };
  return (
    <HighlightContext.Provider
      value={{
        userLevel,
        totalDistance,
        caloriesBurnt,
        totalHoursWalked,
        totalWalks,
        totalSteps,
      }}
    >
      {children}
    </HighlightContext.Provider>
  );
}
