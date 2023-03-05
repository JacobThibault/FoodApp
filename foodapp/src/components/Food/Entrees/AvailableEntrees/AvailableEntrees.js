
import classes from './AvailableEntrees.module.css';
import Card from '../../../UI/Card';
import ComboItem from "../../Combos/ComboItem/ComboItem";
import EntreeItem from "../EntreeItem/EntreeItem";
//Create dummy data here but can eventually replace this with data from database.
const DUMMY_ENTREES = [
    {
        id: 'entree1',
        name: 'Pizza',
        description: 'Fresh Pizza with Pepperoni.',
        price: 15.99,
    },
    {
        id: 'entree2',
        name: 'Dozen Wings',
        description: 'Tossed with Medium Sauce',
        price: 13.99,
    },
    {
        id: 'entree3',
        name: 'Cheese Burger',
        description: 'American, raw, meaty',
        price: 9.99,
    },
    {
        id: 'entree4',
        name: 'Chick Fingers',
        description: 'Five Hand Breaded Chicken Fingers',
        price: 12.99,
    },
];

const AvailableEntrees = () => {
    const entreeList = DUMMY_ENTREES.map(entree =>
        <EntreeItem
        key={entree.id}
        name={entree.name}
        description={entree.description}
        price={entree.price}
        />
    );

    return (
        <section className={classes.entrees}>
            <Card>
                {/*consider replacing the paragraph tag with another component, tried before but ran into overlapping
                 tried copying the Summary component but wasn't working.*/}
                <p>Entrees: </p>
                <ul> {entreeList} </ul>
            </Card>
        </section>
    );
};


export default AvailableEntrees;