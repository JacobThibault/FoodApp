import CombosSummary from './CombosSummary/CombosSummary';
import AvailableCombos from "./AvailableCombos/AvailableCombos";

import {Fragment} from 'react';


const Combos = () => {
    return (
        <Fragment>
            <CombosSummary />
            <AvailableCombos />
        </Fragment>
    );


};
export default Combos;