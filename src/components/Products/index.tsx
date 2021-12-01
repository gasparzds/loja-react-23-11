import './style.css';
import {Product} from '../../@types'

    type ProductProp = {
        items: Array<Product>;
    }
    
    
    export function Products(props:ProductProp){
        return (
            <div className="products">
                {props.items.map(product => {
                    return(
                        <div className="card">
                        <img src={`assets/images/${product.photo}`} />
                        <div className="card-body">
                            <h5>{product.name}</h5>
                            <div className="details">
                                <div className="star-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="price">
                                    <h3>R${product.price}</h3>
                                    <p>10 x R$ {product.price/10}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>  
        )
    }

