import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionProduct, ProductActionsType} from '../../../state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
@Output() productEventEmitter: EventEmitter<ActionProduct>= new EventEmitter<ActionProduct>()
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
 this.productEventEmitter.emit({type:ProductActionsType.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type:ProductActionsType.GET_SELECTED_PRODUCTs});

  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({type:ProductActionsType.GET_AVAILABLE_PRODUCTS});

  }

  onNewProducts() {
    this.productEventEmitter.emit({type:ProductActionsType.NEW});

  }

  onSearch(dataForm: any) {
    this.productEventEmitter.emit({type:ProductActionsType.SEARCH,payload:dataForm});

  }
}
