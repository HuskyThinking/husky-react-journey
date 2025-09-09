import {configureStore} from '@reduxjs/toolkit'

import userReducer from './modules/user.jsx'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    // 注册子模块
    user: userReducer
  }
});
