import { Injectable } from '@angular/core';
import {ProductType} from "../types/good.type";

@Injectable(
  //{
  //providedIn: 'root'
  // }
)
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {
    //ajax
    return [
      {
        title: 'Макарун с малиной',
        price: 1.7,
        img: 'macaroon-1.png'
      },
      {
        title: 'Макарун с манго',
        price: 1.7,
        img: 'macaroon-2.png'
      },
      {
        title: 'Пирог с ванилью',
        price: 1.7,
        img: 'macaroon-3.png'
      },
      {
        title: 'Пирог с фисташками',
        price: 1.7,
        img: 'macaroon-4.png'
      },
    ]
  }
}
