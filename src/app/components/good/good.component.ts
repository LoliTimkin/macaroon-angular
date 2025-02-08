import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/good.type";

@Component({
  selector: 'good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Input() good: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.good = {
      title: "",
      price: 0,
      img: ""
    }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.good)
  }
}
