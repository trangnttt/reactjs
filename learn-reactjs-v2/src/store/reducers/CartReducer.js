import '../actions/shopping'

const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_CARD:
            return "ADD";
        case UP_CARD:
            return "UPDATE";
        case DEL_CARD:
            return "DELETE";
        default:
            throw new Error();
    }
};

export default CartReducer