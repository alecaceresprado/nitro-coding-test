import { Component, EventEmitter, Output, Input } from '@angular/core';

import { OrderCriteria } from '@models';

@Component({
  selector: 'app-gouping-selector',
  templateUrl: './gouping-selector.component.html',
  styleUrls: ['./gouping-selector.component.scss'],
})
export class GoupingSelectorComponent {
  @Input() public selectedCriteria: OrderCriteria = OrderCriteria.WEEK;
  @Output() public handleCriteriaChange: EventEmitter<
    OrderCriteria
  > = new EventEmitter();

  public criteria: OrderCriteria[] = [
    OrderCriteria.WEEK,
    OrderCriteria.LOCATION,
    OrderCriteria.AUTHOR,
  ];
}
