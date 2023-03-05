
import ComboItem from '../ComboItem/ComboItem';
import classes from './AvailableCombos.module.css';
import Card from '../../../UI/Card';
//Create dummy data here but can eventually replace this with data from database.
const DUMMY_MEALS = [
    {
        id: 'comb1',
        name: 'Pizza',
        description: 'Fresh Pizza with Pepperoni.',
        price: 15.99,
    },
    {
        id: 'comb2',
        name: 'Dozen Wings',
        description: 'Tossed with Medium Sauce',
        price: 13.99,
    },
    {
        id: 'comb3',
        name: 'Cheese Burger',
        description: 'American, raw, meaty',
        price: 9.99,
    },
    {
        id: 'comb4',
        name: 'Chick Fingers',
        description: 'Five Hand Breaded Chicken Fingers',
        price: 12.99,
    },
];

const AvailableCombos = () => {
    const comboList = DUMMY_MEALS.map(combo =>
        <ComboItem
            id={combo.id} //added to help with individual increasing compatibility.
            key={combo.id}
            name={combo.name}
            description={combo.description}
            price={combo.price}
        />
    );

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
