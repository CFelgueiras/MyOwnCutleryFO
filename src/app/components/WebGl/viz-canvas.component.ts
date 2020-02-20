import { Component, OnInit } from '@angular/core';
import { sgrai } from '../../../assets/js/main';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-viz-canvas',
  templateUrl: './viz-canvas.component.html',
  styleUrls: ['./viz-canvas.component.css']
})

export class VizCanvasComponent implements OnInit {
  Identification: string;
  Brand: string;
  Model: string;
  Localization: string;
  Capacity: number;
  State: boolean;
  MachineTypeId: number;
  ProductionLineId: number;
  pl: string;
  x: number;
  y: number;
  z: number;
  rtx: number;
  formdata;
  openform = false;

  constructor() { }

  ngOnInit() {
    sgrai();
  }

  onClickSubmitForm() {
    this.Localization = this.pl + ';' + this.x + ';' + this.y + ';' + this.z + ';' + this.rtx + ';';
    const newMachine = {
      Identification: this.Identification,
      Brand: this.Brand,
      Model: this.Model,
      Localization: this.Localization,
      Capacity: this.Capacity,
      State: this.State,
      MachineTypeId: this.MachineTypeId,
      ProductionLineId: this.ProductionLineId,
    };
    sgrai.postMachine(newMachine);
  }

  onClickOpenForm() {
    this.openform = true;
  }
}
