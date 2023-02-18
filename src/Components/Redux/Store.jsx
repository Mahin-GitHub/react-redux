import { counterReducer } from "./Reducer";
import  {createStore} from "redux"


export const store = createStore(counterReducer);

store.subscribe(()=> {
    console.log(store.getState())
})
