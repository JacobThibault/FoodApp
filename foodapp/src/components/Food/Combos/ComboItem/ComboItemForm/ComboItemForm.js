import classes from './ComboItemForm.module.css'
import Input from "../../../../UI/Input";
import {useRef, useState} from 'react';

const ComboItemForm = props => {

    const [amountIsValue, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();


    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //always a string
        const enteredAmountNumber = +enteredAmount; //converts the string into an int

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5)
            {
                setAmountIsValid(false)
                return;
            }
        props.onAddToCart(enteredAmountNumber); // gives data to the component, received method through props
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id:'amount_' + props.id, /**Makes it unique, so it doesn't always update first element **/
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>Add</button>
            {!amountIsValue && <p>Please enter a valida mount (1-5).</p>}
        </form>
    );
};

export default ComboItemForm;