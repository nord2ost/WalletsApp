import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import MainScreenActions from '../Redux/MainScreenRedux'

export function * getWallet (api, action) {
  const { data } = action
  
  try {
      const feed = yield call(api.fetchWallet);
      
      yield put({type: "MAIN_SCREEN_SUCCESS", payload: feed.data});
   } catch (e) {
      yield put({type: "MAIN_SCREEN_FAILURE"});
   }
}


