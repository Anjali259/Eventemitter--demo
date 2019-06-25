import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
      <div class="navbar-header">
          <a href="#" class="navbar-brand">
              Recipe Book!
          </a>
      </div>
      <div class="navbar-default">
          <ul class="nav navbar-nav">
              <li><a href="#" (click)="onSelect('recipe')">Recipes</a></li>
              <li><a href="#" (click)="onSelect('shopping-list')">Shopping list</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle" role="button">Manage<span class="caret"></span></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">Recipes</a></li>
                      <li><a href="#">Shopping list</a></li>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

 @Output() featureselected = new EventEmitter<string>();

  onSelect(feature: string)
  {
  this.featureselected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
