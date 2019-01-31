import React from 'react';
import './CreditCard.css'

class CreditCard extends React.Component{
    constructor(props){
        super(props);

    };

    deconstructNumber(number) {
        let output = '';
        for(let i = 0; i < number.length/4; i++){
            output += number.substring(i*4,i*4+4)  + ' ';
        }
        return(<span>{output}</span>);
    }

    render(){
        return (
            <div className="CREDIT-CARD">
                <div className="CREDIT-CARD-NUMBER">{this.deconstructNumber('0123456789876543')}</div>
                <div className="CREDIT-CARD-NUMBER"></div>
                <div className="CREDIT-CARD-NUMBER"></div>
            </div>
        );
    };

}

export default CreditCard;