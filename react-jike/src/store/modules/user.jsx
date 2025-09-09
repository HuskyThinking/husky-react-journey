import {createSlice} from '@reduxjs/toolkit'
import {clearToken, getToken, setToken as _setToken} from "@/utils/token.jsx";
import {getProfileAPI, loginAPI} from "@/apis/user.jsx";

let userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || null,
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(state.token)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      clearToken()
    }
  }
});

const {setToken, setUserInfo, clearUserInfo} = userStore.actions
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginAPI(loginForm)
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getProfileAPI()
    dispatch(setUserInfo(res.data))
  }
}

export {setToken, fetchLogin, fetchUserInfo, clearUserInfo}
export default userReducer
