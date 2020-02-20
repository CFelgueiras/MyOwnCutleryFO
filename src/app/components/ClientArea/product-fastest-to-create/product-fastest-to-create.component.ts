import { Component, OnInit } from '@angular/core';
import {ManufacturingPlanService} from '../../../services/manufacturing-plan.service';
import {ManufacturinPlan} from '../../Production/manufacturing-plan-search/Operation';
import {element} from 'protractor';

export interface ProdElement {
  name: string;
  position: number;
  number: number;
}

const ELEMENT_DATA: ProdElement[] = [
  {position: 1, name: 'Fork 1', number: 8},
  {position: 2, name: 'faca2019', number: 15},
  {position: 3, name: 'garf3', number: 17},
];

@Component({
  selector: 'app-product-fastest-to-create',
  templateUrl: './product-fastest-to-create.component.html',
  styleUrls: ['./product-fastest-to-create.component.css']
})
export class ProductFastestToCreateComponent implements OnInit {

  manPlan: any;
  manPlanList: any;
  manPlanArray: ManufacturinPlan[] = [];
  value: number;
  valoresArray: number[] = [];
  prodArray: string[] = [];

  displayedColumns: string[] = ['position', 'name', 'number'];
  dataSource = ELEMENT_DATA;

  constructor(private manufacturingPlanService: ManufacturingPlanService) {
  }

  ngOnInit() {
    this.getAllManufacturingPlans().then();

 /*
  tentativa

 this.manPlanArray.forEach(element => this.valoresArray.push(
        this.value += +(this.value = +(element.operations.values().return().value.operationTime) +
          +(element.operations.values().return().value.preparationTime))) &&
         this.prodArray.push(element.operations.values().return().value.toolName));*/
  }

  /**
   * GET HTTP all manufacturingPlans
   */
  async getAllManufacturingPlans(): Promise<void> {
    this.manPlanList = (await this.manufacturingPlanService.getAllManufacturingPlans().toPromise()).valueOf();
    this.manPlanArray = this.manPlanList;
  }

}
