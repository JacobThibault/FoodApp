import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';




const HeaderCartButton = props => {

    return <button className={classes.button}>
        <span classes={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>12</span>



    </button>
};

export default HeaderCartButton;