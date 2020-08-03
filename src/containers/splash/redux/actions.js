const {createAction} = require('@reduxjs/toolkit');

const getAppVersion = createAction('splash/GET_APPVERSION');
const setAppVersion = createAction('splash/SET_APPVERSION');
const enterClicked = createAction('splash/ON_ENTER_CLICKED');

export {getAppVersion, setAppVersion, enterClicked};
