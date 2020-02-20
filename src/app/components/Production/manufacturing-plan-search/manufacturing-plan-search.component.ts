import { Component, OnInit } from '@angular/core';
import {ManufacturingPlanService} from '../../../services/manufacturing-plan.service';
import {Operation} from './Operation';
import {ManufacturinPlan} from './Operation';

@Component({
  selector: 'app-manufacturing-plan-search',
  templateUrl: './manufacturing-plan-search.component.html',
  styleUrls: ['./manufacturing-plan-search.component.css']
})
export class ManufacturingPlanSearchComponent implements OnInit {
  operation: Operation = new Operation();
  manPlanObj: ManufacturinPlan = new ManufacturinPlan();
  operArray: Operation[] = [];
  manPlanId: string;
  manPlan: any;
  manPlanList: any;
  manPlanArray: ManufacturinPlan[] = [];


  constructor(private manufacturingPlanService: ManufacturingPlanService) {
  }

  ngOnInit() {
    this.getAllManufacturingPlans().then();
  }

  /**
   * Get manufacturing plan by id and feed it to the html.
   */
  async getManufacturingPlanById(): Promise<void> {
    this.manPlan = (await this.manufacturingPlanService.getManufacturingPlanById(this.manPlanObj.id).toPromise()).valueOf();
    this.operArray = this.manPlan.operations;
  }


  onGetManPlanClick(): void {
    this.getManufacturingPlanById().then();
  }

  /**
   * GET HTTP all manufacturingPlans
   */
  async getAllManufacturingPlans(): Promise<void> {
    this.manPlanList = (await this.manufacturingPlanService.getAllManufacturingPlans().toPromise()).valueOf();
    this.manPlanArray = this.manPlanList;
  }
}
