import React, {Component} from 'react';
import './Converter.css'

class converter extends Component {
  state = {
    currencies: ["RUB", "USD", "EUR", "HKD", "JPY","CAD"],
    base: "RUB",
    amount: "1",
    convertTo: "USD",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(res => res.json())
      .then(data => {
        const date = data.date;
        const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
        this.setState({
          result,
          date
        });
      });
  };

  render() {
    const {currencies, base, amount, convertTo, result, date} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="card-body">
            <p>{amount} {base} is equavalent to {result} {convertTo}</p>
            <div className="row">
              <div className="col">
                <select 
                  name="convertTo" 
                  value={convertTo} 
                  onChange={this.handleSelect}
                  className="form-control">
                  {currencies.map(currency => 
                  <option key={currency} value={currency}>{currency}</option>
                  )}
                </select>
              </div>
            </div>
            <p>As of {date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default converter;