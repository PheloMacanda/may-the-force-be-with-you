export const updateAppVersion = (state, action) => {
  return {
    ...state,
    appVersion: action.payload.appVersion,
  };
};
