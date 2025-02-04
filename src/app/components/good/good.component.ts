import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/good.type";

@Component({
  selector: 'good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss']
})
export class GoodComponent implements OnInit {

  @Input() good: ProductType;

  constructor() {
    this.good = {
      title: "",
      price: 0,
      img: ""
    }
  }

  ngOnInit(): void {
  }

}
