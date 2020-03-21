import {
    DELETE_PRODUCT_FAILURE,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCTS_SUCCESS, GET_CATEGORY_PRODUCT
} from "../actions/productsActions";

const initialState = {
    products: [],
    productCat:[],
    product: [],
    delete:null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        case FETCH_PRODUCT_SUCCESS:
            return {...state, product: action.id};
        case GET_CATEGORY_PRODUCT:
            return {
              ...state,  productCat: action.productt
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                delete: action.error
            };
        default:
            return state;
    }
};

export default productsReducer;