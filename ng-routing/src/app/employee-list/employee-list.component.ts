import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <div class="card bg-info m-2">
  <div class="card-body">
    Department List
  </div>
</div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
