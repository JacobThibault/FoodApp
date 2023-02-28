import classes from './EntreesSummary.module.css'
const ComboSummary = () =>{
    return (
        <section className={classes.summary}>
            <h2>Yummy Food, Brought to you on Brockport Campus!</h2>
            <p>
                Choose your favorite entree from our broad selection of available entrees
                and enjoy a delicious dinner at home or at your dorm.
            </p>
            <p>
                All our entrees are cooked with ingredients, just-in-time and
                of course by minimum-wage employees!
            </p>
        </section>
    );
};

export default ComboSummary;