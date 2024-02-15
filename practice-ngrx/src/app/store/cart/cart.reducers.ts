import { createReducer, on } from "@ngrx/store";
import { initialState } from "./cart.state";
import { add } from "./cart.action";

const cartReducer = createReducer(
    initialState,
    on(add, (state) => {
        return {
            ...state,
            count : state.count + 1
        }
    })
)