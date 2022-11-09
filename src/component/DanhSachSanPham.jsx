import React, { Component } from "react";
import ModalShoe from "./ModalShoe";

export default class DanhSachSanPham extends Component {
  render() {
    const { mangSanPham } = this.props;
    return (
      <div className="row">
        {mangSanPham.map((sanPham, index) => {
          return (
            <div className="d-flex col-4 gap-4" key={index}>
              <div
                className="mb-4 text-start p-2"
                style={{ background: "#c2b8bd" }}
              >
                <img src={sanPham.image}></img>
                <h4>{sanPham.name}</h4>
                <p>${sanPham.price}</p>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">Xem chi tiết</button>
              </div>
              <ModalShoe sanPham={sanPham}/>
            </div>
          );
        })}
      </div>
    );
  }
}
