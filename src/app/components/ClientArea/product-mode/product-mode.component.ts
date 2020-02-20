import {Component, OnInit} from '@angular/core';
import {ClientAreaService} from '../../../services/client-area.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../Production/product-search/Product';
import {element} from 'protractor';

@Component({
    selector: 'app-product-mode',
    templateUrl: './product-mode.component.html',
    styleUrls: ['./product-mode.component.css']
})
export class ProductModeComponent implements OnInit {

    x: number;
    prodList2: any;
    prodIdArray: Product[] = [];
    prodList: any;
    productsList: any;
    product: Product;
    prodArray: Product[] = [];
    productObj: Product = new Product();
    private productlistfinal: any;

    constructor(
        private clientAreaService: ClientAreaService,
        private productService: ProductService
    ) {
    }

    ngOnInit() {
        this.getProductsMode();
        this.getAllProducts().then();
    }

    /**
     * Get products with highest mode and feed it to the html.
     */
    getProductsMode(): void {
        this.clientAreaService.getProductsMode().subscribe((result) => {
            this.prodList2 = result;
            this.prodIdArray = this.prodList2;
            console.log(this.prodList2);
            });
    }

    getProds(): void {
        this.productlistfinal = this.productsList.filter(product => this.prodList.products.includes(product.id));
    }

    async getAllProducts(): Promise<void> {
        this.prodList = (await this.productService.getAllProducts().toPromise()).valueOf();
        this.prodArray = this.prodList;
    }


}
