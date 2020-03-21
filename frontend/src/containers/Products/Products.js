import React, {Component, Fragment} from 'react';
import {Button} from "reactstrap";
import {fetchProducts} from "../../store/actions/productsActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProductListItem from "../../components/ProductListItem/ProductsListItem";
import {fetchCategories} from "../../store/actions/categoriesAction";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
        if (this.props.user === null){
            this.props.history.push('/register')
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.products !== prevState){
            this.props.fetchProducts();

        }
    }

    render() {
        return (
            <Fragment>
                <h2>
                    All Products
                    <Button
                        color="primary"
                        className="float-right"
                        tag={Link}
                        to={"/product/new"}
                    >
                        Add product
                    </Button>
                </h2>

                {this.props.products.map(product => (
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

                <div ref={this.bottom}/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.categories.categories,
    user:state.users.user

});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);