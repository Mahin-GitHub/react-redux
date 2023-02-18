import { DECREMENT, INCREMENT, RESET } from "./Constants";
import { initialCounterState } from "./State";

export const counterReducer = (state = initialCounterState, action) => {
    switch(action.type){
        case INCREMENT :
            return {
                count : state.count + 1
            }
        case DECREMENT :
            return {
                count : state.count - 1
            }
        case RESET :
            return {
                count : 0
            }
        default:
            return state
    }
}