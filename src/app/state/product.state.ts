export enum  ProductActionsType{

  GET_ALL_PRODUCTS="[product] Get All Product",
  GET_SELECTED_PRODUCTs="[product] Get SELECTED",
  GET_AVAILABLE_PRODUCTS="[product] Get available Product",
  SEARCH="[product] Search Product",
  NEW="[product] New Product",
  SELECT_PRODUCT="[product] select Product",
  EDIT_PRODUCT="[product] Edit Product",
  DELETE_PRODUCT="[product] Delete Product"


}
export interface ActionProduct{
  type: ProductActionsType,
  payload?:any
}
export enum  DataStateEnum{

  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
