import React, { useEffect } from 'react';
import TD from '../images/TD.png';
import Loreal from '../images/Loreal.png';
import Telus from '../images/Telus.jpg';
import CIBC from '../images/CIBC.png';
import BMO from '../images/BMO.jpg';
import Scotia from '../images/Scotia.gif';
import ABB from '../images/ABB.png';
import Manulife from '../images/Manulife.jpg';
import Shopify from '../images/Shopify.jpg';
import WorldVision from '../images/WorldVision.png';
import CBC from '../images/CBC.jpg';
import Samsung from '../images/Samsung.jpg';
import Coke from '../images/Coke.jpg';
import Pepsi from '../images/Pepsi.png';
import Index from '../images/Index.png';
import Glaxo from '../images/Glaxo.png';
import Collective from '../images/Collective.png';
import Steam from '../images/Steam.png';
import Ecobee from '../images/Ecobee.png';
import Top from '../images/Top.svg';
import Cisco from '../images/Cisco.png';
import WealthSimple from '../images/WealthSimple.jpg';
import Ubisoft from '../images/Ubisoft.png';
import Vox from '../images/Vox.jpg';
import Wattpad from '../images/Wattpad.png';
import Automattic from '../images/Automattic.png';
import Opusone from '../images/Opusone.svg';
import RBC from '../images/RBC.jpg';
import PG from '../images/PG.jpg';
import Amazon from '../images/Amazon.jpg';

// Should've named like logo or companies
const Brands = (props) => {
    let brands = [{
        id: 1,
        image: TD,
        name: 'TD Bank'
    },
    {
        id: 2,
        image: Loreal,
        name: "L'Oréal"
    },
    {
        id: 3,
        image: Telus,
        name: 'Telus'
    },
    {
        id: 4,
        image: CIBC,
        name: 'CIBC'
    },
    {
        id: 5,
        image: BMO,
        name: 'BMO'
    },
    {
        id: 6,
        image: Scotia,
        name: 'Scotia'
    },
    {
        id: 7,
        image: Manulife,
        name: 'Manulife'
    },
    {
        id: 8,
        image: ABB,
        name: 'ABB'
    },
    {
        id: 9,
        image: Shopify,
        name: 'Shopify'
    },
    {
        id: 10,
        image: WorldVision,
        name: 'WorldVision'
    },
    {
        id: 11,
        image: CBC,
        name: 'CBC'
    },
    {
        id: 12,
        image: Samsung,
        name: 'Samsung'
    },
    {
        id: 13,
        image: Coke,
        name: 'Coke'
    },
    {
        id: 14,
        image: Pepsi,
        name: 'Pepsi'
    },
    {
        id: 15,
        image: Index,
        name: 'Index Exchange'
    },
    {
        id: 16,
        image: Glaxo,
        name: 'Glaxo Smith Kline'
    },
    {
        id: 17,
        image: Collective,
        name: 'Collective Arts Brewing'
    },
    {
        id: 18,
        image: Steam,
        name: 'Steam Whistle Brewing'
    },
    {
        id: 19,
        image: Ecobee,
        name: 'Ecobee'
    },
    {
        id: 20,
        image: Top,
        name: 'Top Hat'
    },
    {
        id: 21,
        image: Cisco,
        name: 'Cisco'
    },
    {
        id: 22,
        image: WealthSimple,
        name: 'WealthSimple'
    },
    {
        id: 23,
        image: Ubisoft,
        name: 'Ubisoft'
    },
    {
        id: 24,
        image: Vox,
        name: 'Vox'
    },
    {
        id: 25,
        image: Wattpad,
        name: 'Wattpad'
    },
    {
        id: 26,
        image: Automattic,
        name: 'Automattic'
    },
    {
        id: 27,
        image: RBC,
        name: 'Royal Bank of Canada'
    },
    {
        id: 28,
        image: Opusone,
        name: 'Opusone Solution'
    },
    {
        id: 29,
        image: PG,
        name: 'Procter and Gamble'
    },
    {
        id: 30,
        image: Amazon,
        name: 'Amazon'
    }
]

const shuffleCards =(brands) => {
    const oldBrands = [...brands];
    let newBrands = [];

    // take one obj from oldBrands and add to newBrands, render each time.
    for (let i=0; i < brands.length; i++) {
        let randomNumber = Math.floor(Math.random() * oldBrands.length);
        newBrands.push(oldBrands[randomNumber]);
        oldBrands.splice(randomNumber, 1);
    }
    brands = newBrands;

    return (
        <div className="brands-cards-contianer">
        {
            newBrands.map((brand) => (
                <div 
                    key={brand.id}
                    className="brand-card"
                    onClick={()=> {
                        props.handleTracking(brand.id)
                    }}
                >
                    <img 
                        src={brand.image}
                        alt={brand.name + "-img"}
                        className="brand-logo"
                    />
                    <p className="brand-name">{brand.name}</p>
                </div>
            ))
        }
    </div>
    )
}
        
    return (
        shuffleCards(brands)
    )
}

export default Brands