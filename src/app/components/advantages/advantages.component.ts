import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";
import {ProductType} from "../../types/good.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() i: number;

  constructor() {
    this.advantage = {
      title: '',
        description: ''
    }
    this.i = 0
  }

  ngOnInit(): void {
  }

}
