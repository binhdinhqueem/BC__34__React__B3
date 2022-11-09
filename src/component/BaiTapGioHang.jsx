import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalShoe from './ModalShoe';

import shoeData from './shoeData.json';

export default class BaiTapGioHang extends Component {
  state = {
    stateShoes: {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
      }
}

  render() {

    return (
      <div className='container'>
        <h1>Bai tap gio hang</h1>
        <ModalShoe stateShoes={this.state.stateShoes} />
        <DanhSachSanPham mangSanPham={shoeData} />
      </div>
    )
  }
}
