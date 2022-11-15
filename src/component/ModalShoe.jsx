import React, { Component } from "react";


export default class ModalShoe extends Component {
  render() {
    const { stateShoes } = this.props;
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Shoe
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body text-center">
                <img src={stateShoes.image} className="img-fluid" />
                <h4>Name: {stateShoes.name}</h4>
                <h3>Price: {stateShoes.price}$</h3>
                <p>Description: {stateShoes.description}</p>
                <p>Quantity: {stateShoes.quantity}</p>
                 </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
