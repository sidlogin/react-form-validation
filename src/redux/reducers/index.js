import { productReducer, selectedProductReducer } from "./productReducer";

const globalReducer = {
    allProducts: productReducer,
    product: selectedProductReducer
};

export default globalReducer;