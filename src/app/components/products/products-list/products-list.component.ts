import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionProduct, AppDataState, ProductActionsType} from '../../../state/product.state';
import {Product} from '../../../model/product.model';
import {DataStateEnum} from '../../../state/product.state';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
 @Input() productsInput$: Observable<AppDataState<Product[]>> | null = null;
 @Output() productsEventEmitte:EventEmitter<ActionProduct> = new EventEmitter<ActionProduct>();
   readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
    this.productsEventEmitte.emit({type:ProductActionsType.SELECT_PRODUCT,payload:p});

  }

  onDelete(p: Product) {
    this.productsEventEmitte.emit({type:ProductActionsType.DELETE_PRODUCT,payload:p});

  }

  onEdit(p: Product) {
    this.productsEventEmitte.emit({type:ProductActionsType.EDIT_PRODUCT,payload:p});

  }

  onActionEvent($event: ActionProduct) {
    this.productsEventEmitte.emit($event);
  }
}
