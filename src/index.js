import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './lib/CreditCard/CreditCard'

import './index.css'



ReactDOM.render(


<div className="body">
    <CreditCard creditCardNumber={'0123456789876543'} creditCardExpiration={'10/20'}/>
</div>

, document.getElementById('root'));
