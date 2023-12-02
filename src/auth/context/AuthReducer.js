import { types } from "../types/types";

const initialState = {
    logged: false,
    // nmae: "Alonso"
}
export const AuthReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case types.logout:
            return {
                logged: true,
            }
        default:
            return state;
    }
}