import {Component, OnInit} from '@angular/core';
import {OperationService} from '../../../services/operation.service';
import {Operation} from './operation';

@Component({
  selector: 'app-create-operation',
  templateUrl: './create-operation.component.html',
  styleUrls: ['./create-operation.component.css']
})
export class CreateOperationComponent implements OnInit {

  operation: Operation = new Operation();

  constructor(
    private operationService: OperationService
  ) {
  }

  ngOnInit() {
  }

  addOperation(): void {
    if (!this.operation.Name) {
      alert('Operation name is mandatory.');
      return;
    }
    this.operationService.addOperation(this.operation)
      .subscribe();
    alert('Operation successfully added.');
  }

  onAddOperation(): void {
    this.addOperation();
    this.cleanObject();
  }

  cleanObject(): void {
    this.operation.Name = '';
    this.operation.ToolName = '';
    this.operation.OperationTime = '';
    this.operation.PreparationTime = '';
  }
}
