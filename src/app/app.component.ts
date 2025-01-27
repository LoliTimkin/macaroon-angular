import { Component } from '@angular/core';
import {ProductType} from "./types/good.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  public goods: ProductType[] = [
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

  public formValues = {
    productTitle: "",
    name: "",
    phone: "",
  }

  public showPresent: boolean = true;
  public contactPhoneValues: string = "375 (29) 368-98-68";
  public linkInstagram: string = "https://www.instagram.com/"

  public scrollTo(target: HTMLElement): void {
      target.scrollIntoView({behavior: "smooth"})
  }

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }

}
