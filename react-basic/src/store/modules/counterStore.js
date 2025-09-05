import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState: {
    count: 1
  },
  // 修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addToNum(state, action) {
      state.count = state.count + action.payload
    }
  }
})
// 结构出actionCreater
const {increment, decrement, addToNum} = counterStore.actions

// 获取reducer函数
const counterReducer = counterStore.reducer

// 导出
export {increment, decrement, addToNum}
export default counterReducer
