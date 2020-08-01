const {createAction} = require('@reduxjs/toolkit');

const getAppVersion = createAction('app/GET_APPVERSION');
const setAppVersion = createAction('app/SET_APPVERSION');

export {getAppVersion, setAppVersion};
