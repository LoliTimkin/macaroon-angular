import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/good.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})

export class AppComponent implements OnInit {
  public goods: ProductType[] = [];

  constructor(private productService: ProductService, public cartService: CartService) {
  }

  ngOnInit() {
    this.goods = this.productService.getProducts()
  }

  public advantages: AdvantageType[] = [
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

  public formValues = {
    productTitle: "",
    name: "",
    phone: "",
  }

  public showPresent: boolean = true;
  public contactPhoneValues: string = "375293689868";
  public linkInstagram: string = "https://www.instagram.com/"

  public scrollTo(target: HTMLElement): void {
      target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
    this.cartService.count++;
    this.cartService.sum = this.cartService.sum + product.price;
    alert(product.title + " добавлен в корзину!")
  }

}
