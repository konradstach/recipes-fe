import React, {useEffect, useState} from 'react';
import axios from "axios";


const Scrapper = () => {
    const [webPage, setWebPage] = useState([]);

    useEffect(() => {
        axios.get("https://crossorigin.me/https://www.investing.com/commodities/real-time-futures")
            .then(response => {
                console.log(response)
                setWebPage(response.data)
                return response.data
            })
    }, []);

    // useEffect(() => {
    //     rp("https://www.kwestiasmaku.com/przepis/chlebek-z-maslem-czosnkowym")
    //         .then(html => {
    //             console.log(html)
    //         setWebPage(html)
    //     })
    // }, []);

    return (
        <div>
            {webPage}
        </div>
    );
};

export default Scrapper;
