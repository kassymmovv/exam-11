import axiosApi from "../../axiosApi";
import {push} from 'connected-react-router';


export const GET_CATEGORY_PRODUCT = 'GET_CATEGORY_PRODUCT';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const fetchProductCategorySuccess = productt => ({type: GET_CATEGORY_PRODUCT, productt});
export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, products});
export const createProductSuccess = () => ({type: CREATE_PRODUCT_SUCCESS});
export const fetchProductSuccess = id => ({type: FETCH_PRODUCT_SUCCESS, id});
export const deleteProductFailure = error => ({type:DELETE_PRODUCT_FAILURE,error});

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await axiosApi.get('/products');
        dispatch(fetchProductsSuccess(response.data));
    };
};

export const createProduct = productData => {
    return async (dispatch, getState) => {
        const user = getState().users.user;
        await axiosApi.post('/products', productData, {headers: {'Authorization': 'Token ' + user.token}});
        dispatch(createProductSuccess());
    };
};

export const fetchProductsCategory = id => {
    return async dispatch => {
        const response = await axiosApi.get('/products/' + id);
        dispatch(fetchProductCategorySuccess(response.data));
    }
};
export const fetchProduct = id => {
    return async dispatch => {
        const response = await axiosApi.get('/products/product/' + id);
        dispatch(fetchProductSuccess(response.data));
    }
};
export const deleteProduct = id => {
    return async (dispatch,getState) => {
        try {
            const user = getState().users.user;
             await axiosApi.delete('/products/' + id,{headers: {'Authorization': 'Token ' + user._id}});
            dispatch(push('/'));

        }catch (error) {
            if (error.response) {
                dispatch(deleteProductFailure(error.response.data));
            } else {
                dispatch(deleteProductFailure({global: 'Network error or no internet'}));
            }
        }

    }
};