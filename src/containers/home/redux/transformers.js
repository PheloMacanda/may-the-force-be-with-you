export const setPlanets = (state, action) => {
  return {
    ...state,
    planets: action.payload?.planets ? action.payload?.planets : [],
  };
};
