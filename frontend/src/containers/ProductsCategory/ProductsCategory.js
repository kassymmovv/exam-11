import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchProducts, fetchProductsCategory} from "../../store/actions/productsActions";
import ProductListItem from "../../components/ProductListItem/ProductsListItem";

class ProductsCategory extends Component {
    componentDidMount() {
        this.props.fetchProductsCategory(this.props.match.params.id)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.props.match.params.id !== prevProps.match.params.id){
           this.props.fetchProductsCategory(this.props.match.params.id)
       }
    }

    render() {


        return (
            <>

                {this.props.productCat.map(product => (
                    <a href="#" onClick={() => console.log(this.props.history.push(`/product/${product._id}`))} key={product._id}>
                        <ProductListItem
                            key={product._id}
                            title={product.title}
                            id={product._id}
                            price={product.price}
                            image={product.image}

                        />
                    </a>

                ))}
            </>
        );
    }
}

const mapStateToProps = state => ({
    productCat: state.products.productCat,
    catId:state.products.catId,

});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProductsCategory:id => dispatch(fetchProductsCategory(id))
});

export default connect(mapStateToProps,mapDispatchToProps) (ProductsCategory);