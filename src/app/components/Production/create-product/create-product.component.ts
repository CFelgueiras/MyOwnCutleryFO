import {Component, OnInit} from '@angular/core';
import {Product} from './Product';
import {ProductService} from '../../../services/product.service';
import {ManufacturingPlanService} from '../../../services/manufacturing-plan.service';
import {ManufacturinPlan} from '../manufacturing-plan-search/Operation';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

    product: Product = new Product();
    manPlanObj: ManufacturinPlan = new ManufacturinPlan();
    manPlan: any;
    manPlanList: any;
    manPlanArray: ManufacturinPlan[] = [];

    constructor(
        private productService: ProductService,
        private manufacturingPlanService: ManufacturingPlanService,
    ) {
    }

    ngOnInit() {
        this.getAllManufacturingPlans().then();
    }

    addProduct(): void {
        if (!this.product.Name) {
            alert('Product name is mandatory.');
            return;
        }
        this.productService.addProduct(this.product)
            .subscribe();
        alert('Product successfully added.');
    }

    onAddProduct(): void {
        this.addProduct();
        this.cleanObject();
    }

    cleanObject(): void {
        this.product.Name = '';
        this.product.ManPlanId = '';
    }

    /**
     * GET HTTP all manufacturingPlans
     */
    async getAllManufacturingPlans(): Promise<void> {
        this.manPlanList = (await this.manufacturingPlanService.getAllManufacturingPlans().toPromise()).valueOf();
        this.manPlanArray = this.manPlanList;
    }
}
