
import {useContext} from 'react';
import ComboItemForm from "./ComboItemForm/ComboItemForm";
import classes from './ComboItem.module.css';
import CartContext from "../../../Store/cart-context";


const ComboItem = props => {

    const cartContext = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });


    };

    return(
    <li className={classes.combo}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <ComboItemForm id={props.id} onAddToCart={addToCartHandler()}/>
        </div>
    </li>
    );
};
export default ComboItem;