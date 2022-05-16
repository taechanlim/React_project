import { combineReducers } from "redux";
import user from "./user";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persist = {
    key:'user',
    storage,
    whitelist:['user']
}


const rootReducer = combineReducers({
    user
})


export default persistReducer(persist,rootReducer)