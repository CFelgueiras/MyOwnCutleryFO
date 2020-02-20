import {Component, OnInit} from '@angular/core';
import {ClientAreaService} from '../../../services/client-area.service';

@Component({
    selector: 'app-product-best-sellers',
    templateUrl: './product-best-sellers.component.html',
    styleUrls: ['./product-best-sellers.component.css']
})
export class ProductBestSellersComponent implements OnInit {

    prodList: any;

    constructor(
        private clientAreaService: ClientAreaService
    ) {
    }

    ngOnInit() {
    }

    /**
     * Get products best sellers and feed it to the html.
     */
    async getProductsBestSellers(): Promise<void> {
        this.prodList = (await this.clientAreaService.getProductsBestSellers().toPromise()).valueOf();
    }

    onGetProdListClick(): void {
        this.getProductsBestSellers().then();
    }
}
