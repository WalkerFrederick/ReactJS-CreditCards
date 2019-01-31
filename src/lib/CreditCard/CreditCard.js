import React from 'react';
import './CreditCard.css'

class CreditCard extends React.Component{
    constructor(props){
        super(props);

        //This will make sure that if the credit card doesn't have a number it will still display something
        this.state = {
            creditCardNumber: this.props.creditCardNumber ? this.props.creditCardNumber : 'XXXXXXXXXXXXXXXX',
            creditCardExpiration: this.props.creditCardExpiration ? this.props.creditCardExpiration : 'XX/XX',
            creditCardName: this.props.creditCardName ? this.props.creditCardName : 'Jane Doe',

        }
    };

    //This will break up a 16 digit number just like how it is on a real credit card
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
                <div className="CREDIT-CARD-NUMBER">{this.deconstructNumber(this.state.creditCardNumber)}</div>
                <div className="CREDIT-CARD-EXPIRATION">{this.state.creditCardExpiration}</div>
                <div className="CREDIT-CARD-NAME">{this.state.creditCardName}</div>
            </div>
        );
    };

}

export default CreditCard;