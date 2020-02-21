import React, { Component } from 'react';

export default class BitcoinPrice extends Component{
    _renderCurrencies = () => {
        const { bpi } = this.props;
        const currencies = Object.keys(bpi);
        return currencies.map(currency => 
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> in {currency}</span>
            </div>
        );
    }
    
    render(){
        return(
            <div>
                <h4>Bitcoin Price Index</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}