import { BOOKING } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case BOOKING:
            console.log(action.payload);
            return { success: true }
        default:
            return state;
    }
};
