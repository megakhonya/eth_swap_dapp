import React, { Component } from 'react';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 'buy'
    };
  }

  render() {
    let content;
    if (this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        novacoinBalance={this.props.novacoinBalance}
        buyTokens={this.props.buyTokens}
      />;
    } else {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        novacoinBalance={this.props.novacoinBalance}
        sellTokens={this.props.sellTokens}
      />;
    }

    return (
      <div id="content" className="mt-3">
        <div className="d-flex justify-content-between mb-3">
          <button
            className="btn btn-light"
            onClick={() => {
              this.setState({ currentForm: 'buy' });
            }}
            style={{ backgroundColor: 'hotpink', color: 'black' }} // Set button color to pink and text color to black
          >
            Buy
          </button>
          <span className="text-muted">{'<;   >'}</span>
          <button
            className="btn btn-light"
            onClick={() => {
              this.setState({ currentForm: 'sell' });
            }}
            style={{ backgroundColor: 'hotpink', color: 'black' }} // Set button color to pink and text color to black
          >
            Sell
          </button>
        </div>
        <div className="card mb-4" style={{ backgroundColor: 'hotpink', color: 'black' }}> {/* Set card background color to pink and text color to black */}
          <div className="card-body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
