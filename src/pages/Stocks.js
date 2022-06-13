

import { useState, useEffect } from "react";

const Stocks = (props) => {
    
    const symbol = props.match.params.symbol;

    const [ ticker, setTicker ] = useState(null);

    const getTicker = async () => {
        const data = await Response.json();
        setTicker(data);
    }
    useEffect(() => {
        getTicker();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>{ticker.asset_id_base} {ticker.asset_id_quote}</h1>
                <h2>${ticker.rate}</h2>
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading. Please be patient....</h1>
    }

    return ticker ? loaded() : loading();


};


export default Stocks;

