import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.css']
})
export class BoosterComponent implements OnInit {

  @Input() percentage: number = 50;
  @Input() label: string = `Test`;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  @ViewChild('iProgress') nProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor(pValue: number) {
    const value: number = pValue;
    if (this.percentage <= 0 && value < 0 || this.percentage >= 100 && value > 0) {
      this.percentage = this.percentage;
    } else {
      this.percentage = this.percentage + value;
    }
    this.changeValue.emit(this.percentage);
    this.nProgress.nativeElement.focus();
  }

  onChange(pNewValue: number) {
    const value: number = pNewValue;
    if (value >= 100) {
      this.percentage = 100;
    } else if (value <= 0){
      this.percentage = 0;
    } else {
      this.percentage = value;
    }
    this.nProgress.nativeElement.value = this.percentage;
    this.changeValue.emit(this.percentage);
    this.nProgress.nativeElement.focus();
  }

}
