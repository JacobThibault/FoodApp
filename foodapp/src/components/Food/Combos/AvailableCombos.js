
import classes from './AvailableCombos.module.css';
import Card from '../../UI/Card';
//Create dummy data here but can eventually replace this with data from database.
const DUMMY_MEALS = [
    {
        id: 'comb1',
        name: 'Pizza',
        description: 'Fresh Pizza with Pepperoni w/ side and drink',
        price: 199.99,
    },
    {
        id: 'comb2',
        name: 'Dozen Wings',
        description: 'Tossed with Medium Sauce w/ side and drink',
        price: 19.99,
    },
    {
        id: 'comb3',
        name: 'Cheese Burger',
        description: 'American, raw, meaty w/ side and drink',
        price: 19.99,
    },
    {
        id: 'comb4',
        name: 'Chick Fingers',
        description: 'Five Hand Breaded Chicken Fingers w/ side and drink',
        price: 19.99,
    },
];

const AvailableCombos = () => {
    const comboList = DUMMY_MEALS.map(combo => <li>{combo.name}</li>);

    return (
        <section className={classes.combos}>
            <Card>
                {/*consider replacing the paragraph tag with another component, tried before but ran into overlapping
                //tried copying the Summary component but wasn't working.*/}
                <p>Combos: </p>
                <ul> {comboList} </ul>
            </Card>
        </section>
    );
};


export default AvailableCombos;