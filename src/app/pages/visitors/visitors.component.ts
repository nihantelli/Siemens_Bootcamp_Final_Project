import { Component } from '@angular/core';

import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css'],
})
export class VisitorsComponent {
  
  constructor(public visitorService: VisitorStateService) {}
 
 
}
