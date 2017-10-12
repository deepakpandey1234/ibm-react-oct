import React, { Component } from 'react';
import classnames from 'classnames';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          imagePath: "images/Laptop.png"
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New model',
          canBuy: true,
          imagePath: "images/Mobile.png"
        }
      ]
    };
  }

  changeTab(tabIndex) {
    this.setState({
      tab: tabIndex
    });
  }

  renderTabPanel(product) {
    let { tab } = this.state;
    let tabPanel;
    if (tab === 1) {
      tabPanel = (<div className="panel"><p>{product.description}</p></div>)
    }
    if (tab === 2) {
      tabPanel = (<div className="panel"><p>Not Yet</p></div>)
    }
    if (tab === 3) {
      tabPanel = (<div className="panel"><p>None yet</p></div>)
    }
    return tabPanel;
  }

  renderProducts() {
    let { products,tab } = this.state;
    let newArr = products.map((product, idx) => {
      let buyBtn;
      if (product.canBuy) {
        buyBtn = <button className="btn btn-primary">buy</button>
      }
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <img src={product.imagePath} className="img-responsive" />
            </div>
            <div className="col-md-9 col-sm-9">
              <span className="badge">{idx + 1}</span>
              <h4>{product.name}</h4>
              <h5>{product.price}</h5>
              {buyBtn}
              <hr />
              <section>
                <ul className="nav nav-tabs">
                  <li className={classnames({active:tab===1})}><a onClick={this.changeTab.bind(this, 1)} href="#">Description</a></li>
                  <li className={classnames({active:tab===2})}><a onClick={this.changeTab.bind(this, 2)} href="#">Specification</a></li>
                  <li className={classnames({active:tab===3})}><a onClick={this.changeTab.bind(this, 3)} href="#">Reviews</a></li>
                </ul>
                {this.renderTabPanel(product)}
              </section>
            </div>
          </div>
        </div>
      );
    });
    return newArr;
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">shopIT</div>
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
