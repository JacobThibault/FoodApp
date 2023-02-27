import classes from './CombosSummary.module.css'
const ComboSummary = () =>{
    return (
    <section className={classes.summary}>
        <h2>Yummy Food, Brought to you on Brockport Campus!</h2>
        <p>
            Choose your favorite combo from our broad selection of available combos
            and enjoy a delicious dinner at home or at your dorm.
        </p>
        <p>
            All our meals are cooked with ingredients, just-in-time and
            of course by minimum-wage employees!
        </p>
    </section>
    );
};

export default ComboSummary;