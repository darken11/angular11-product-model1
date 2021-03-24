import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ActionProduct, AppDataState, DataStateEnum, ProductActionsType} from '../../state/product.state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ = this.productService.getAllProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onSearch(dataForm: any) {
    this.products$ = this.productService.searchProduct(dataForm.keyword).pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  onSelect(p: Product) {
    this.productService.selectProduct(p).subscribe(data => {
      p.selected = data.selected;
    });
  }

  onDelete(p: Product) {
    let v = confirm('Etes vous sure? ');
    if (v == true) {
      this.productService.deleteProduct(p).subscribe(data => {
        this.onGetAllProducts();
      });
    }

  }

  onNewProducts() {
    this.router.navigateByUrl('/newProduct');
  }

  onEdit(p: Product) {
    this.router.navigateByUrl('/editProduct/'+p.id);
  }

  onActionEvent($event: ActionProduct) {
    switch($event.type){
      case ProductActionsType.GET_ALL_PRODUCTS:this.onGetAllProducts();break;
      case ProductActionsType.GET_SELECTED_PRODUCTs: this.onGetSelectedProducts(); break;
      case ProductActionsType.GET_AVAILABLE_PRODUCTS:this.onGetAvailableProducts();break;
      case ProductActionsType.NEW:this.onNewProducts();break;
      case ProductActionsType.SEARCH:this.onSearch($event.payload);break;

      case ProductActionsType.EDIT_PRODUCT:this.onEdit($event.payload);break;
      case ProductActionsType.DELETE_PRODUCT:this.onDelete($event.payload);break;
      case ProductActionsType.SELECT_PRODUCT:this.onSelect($event.payload);break;



    }
  }
}
