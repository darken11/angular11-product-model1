import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionProduct, AppDataState, ProductActionsType} from '../../../../state/product.state';
import {Product} from '../../../../model/product.model';
import {DataStateEnum} from '../../../../state/product.state'

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() products?:Product | null = null;
  @Output() productsEventEmitte:EventEmitter<ActionProduct> = new EventEmitter<ActionProduct>();
  readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(products: any) {
this.productsEventEmitte.emit({type:ProductActionsType.SELECT_PRODUCT, payload:products})
  }

  onDelete(products: Product) {
    this.productsEventEmitte.emit({type:ProductActionsType.DELETE_PRODUCT, payload:products})

  }

  onEdit(products: Product) {
    this.productsEventEmitte.emit({type:ProductActionsType.EDIT_PRODUCT, payload:products})

  }
}
