import classes from './DrinksSummary.module.css'
const DrinksSummary = () =>{
    return (
        <div>
            <section className={classes.summary}>
                <h2>Delicious drinks, Brought to you on Brockport Campus!</h2>
                <p>
                    Choose your favorite drink.
                </p>
            </section>
        </div>
    );
};

export default DrinksSummary;