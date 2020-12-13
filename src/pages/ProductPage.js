import React from 'react';
import  {Link} from 'react-router-dom';
import Product from '../components/Product'

const ProductPage = ({match}) => {
    console.log(match)
    return ( 
        <>
        <div>Strona Produktu</div>
        <Product id={match.params.id}/>
        <Link to="/products">Powrót do listy produktu</Link>
        </>
     );
}
 
export default ProductPage;