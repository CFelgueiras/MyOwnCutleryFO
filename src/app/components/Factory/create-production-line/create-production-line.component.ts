import {Component, OnInit} from '@angular/core';
import {ProductionLineService} from '../../../services/production-line.service';
import {ProductionLine} from './ProductionLine';

@Component({
  selector: 'app-create-production-line',
  templateUrl: './create-production-line.component.html',
  styleUrls: ['./create-production-line.component.css']
})
export class CreateProductionLineComponent implements OnInit {

  productionLine: ProductionLine = new ProductionLine();
  machineId: number;
  machineIdArray: number[] = [];
  constructor(private productionLineService: ProductionLineService) {
  }

  ngOnInit() {
  }

  AddProductionLine(): void {
    if (!this.productionLine.Name) {
      alert('Production line name is mandatory.');
      return;
    }
    this.productionLine.MachineIds = this.machineIdArray;
    this.productionLineService.addProductionLine(this.productionLine)
      .subscribe();
    alert('Production line successfully added.');
  }

  onAddProductionLine(): void {
    this.AddProductionLine();
    this.cleanObject();
  }

  cleanObject(): void {
    this.productionLine.Name = '';
    this.machineIdArray = [];
  }

  addMachineToProdLine() {
    this.machineIdArray.push(this.machineId);
    this.machineId = null;
  }
}
