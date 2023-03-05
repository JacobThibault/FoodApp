import classes from './AvailableSides.module.css';
import Card from '../../../UI/Card';
import ComboItem from "../../Combos/ComboItem/ComboItem";
//Create dummy data here but can eventually replace this with data from database.
const DUMMY_SIDES = [
    {
        id: 'side1',
        name: 'Fries',
        description: 'Fresh Crispy fries.',
        price: 2.99,
    },
    {
        id: 'side2',
        name: 'Onion Rings',
        description: 'Fresh Crispy onion rings',
        price: 2.99,
    },
    {
        id: 'side3',
        name: 'Mozz Sticks',
        description: '4 Fresh, stringy mozz sticks',
        price: 3.99,
    },
    {
        id: 'side4',
        name: 'Chips',
        description: 'Lays Chips',
        price: 1.50,
    },
];

const AvailableSides = () => {
    const sideList = DUMMY_SIDES.map(side =>
        <ComboItem
        key={side.id}
        name={side.name}
        description={side.description}
        price={side.price}
        />
    );

    return (
        <section className={classes.sides}>
            <Card>
                {/*consider replacing the paragraph tag with another header / description component, tried before but ran into overlapping
                //tried copying the Summary component but wasn't working.*/}
                <p>Sides: </p>
                <ul> {sideList} </ul>
            </Card>
        </section>
    );
};


export default AvailableSides;