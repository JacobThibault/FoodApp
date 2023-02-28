
import classes from './AvailableDrinks.module.css';
import Card from '../../UI/Card';
//Create dummy data here but can eventually replace this with data from database.
const DUMMY_DRINKS = [
    {
        id: 'drink1',
        name: 'Pepsi',
        description: 'Mouth watering Pepsi',
        price: 1.99,
    },
    {
        id: 'drink2',
        name: 'Coke',
        description: 'Mouth watering Coke',
        price: 1.99,
    },
    {
        id: 'drink3',
        name: 'Dr. Pepper',
        description: 'Mouth watering Dr. Pepper',
        price: 1.99,
    },
    {
        id: 'drink4',
        name: 'Mountain Dew',
        description: 'Mouth watering Mountain Dew',
        price: 1.99,
    },
];

const AvailableDrinks = () => {
    const drinkList = DUMMY_DRINKS.map(drinks => <li>{drinks.name}</li>);

    return (
        <section className={classes.drinks}>
            <Card>
                {/*consider replacing the paragraph tag with another component, tried before but ran into overlapping
                //tried copying the Summary component but wasn't working.*/}
                <p>Drinks: </p>
                <ul> {drinkList} </ul>
            </Card>
        </section>
    );
};


export default AvailableDrinks;