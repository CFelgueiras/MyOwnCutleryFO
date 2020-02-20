import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from './Product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  productObj: Product = new Product();
  product: any;
  prodList: any;
  prodArray: Product[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getAllProducts().then();
  }

  /**
   * Get product by id and feed it to the html.
   */
  async getProductByID(): Promise<void> {
    this.product = (await this.productService.getProductById(this.productObj.id).toPromise()).valueOf();
    this.productObj = this.product;
  }

  async getAllProducts(): Promise<void> {
    this.prodList = (await this.productService.getAllProducts().toPromise()).valueOf();
    this.prodArray = this.prodList;
  }

  onGetProductClick(): void {
    this.getProductByID().then();
  }
}
