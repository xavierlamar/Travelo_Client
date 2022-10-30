import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userUpdateReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    //this will contain our reducers
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer
})

const initialState = {};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;