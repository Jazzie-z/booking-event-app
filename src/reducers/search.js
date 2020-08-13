import { MOCK_EVENTS } from "../mock";
import { SEARCH_ITEMS } from "../actions";

export default (state = MOCK_EVENTS.items, action) => {
    switch (action.type) {
        case SEARCH_ITEMS:
            if (action.payload)
                return MOCK_EVENTS.items.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
            return MOCK_EVENTS.items
        default:
            return state;
    }
};
