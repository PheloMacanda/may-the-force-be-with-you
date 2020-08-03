const {createAction} = require('@reduxjs/toolkit');

const getPlanets = createAction('home/GET_PLANETS');
const setPlanets = createAction('home/SET_PLANETS', (planets, error) => ({
  payload: {
    planets,
    error,
  },
}));

export {getPlanets, setPlanets};
