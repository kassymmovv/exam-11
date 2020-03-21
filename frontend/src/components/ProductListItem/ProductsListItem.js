import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

const ProductListItem = props => {
    return (
        <Card >
            <CardBody>
                <img src={`http://localhost:8000/uploads/${props.image}`} alt="" style={{width:'150px',height:'100px'}}/>
                <Link to={"/products/" + props.id}>
                    {props.title}
                </Link>
                <strong style={{marginLeft: '10px'}}>
                    {props.price} KGS
                </strong>
            </CardBody>
        </Card>
    );
};

ProductListItem.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default ProductListItem;