import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  unresolvedTasks = 60;
   PasswordHealth = 98;
   Teams=10;
   MyDeligations=20
   DelegationApproval=5

  radius = 61;

  circumference = 2 * Math.PI * this.radius;
  
  visibleArc = this.circumference * 0.80;
 startAngle = 90;
   //unresolved tasks
  get unresolvedOffset(): number {
    return this.visibleArc -
      (this.unresolvedTasks / 100) * this.visibleArc;
  }
  getProgressGradient(): string {
  return this.unresolvedTasks >= 50
    ? 'url(#blueGradient)'
    : 'url(#redGradient)';
}
//password health
get PasswordHealthOffset(): number {
    return this.visibleArc -
      (this.PasswordHealth / 100) * this.visibleArc;
  }
  PasswordHealthGradient(): string {
  return this.PasswordHealth >= 50
    ? 'url(#blueGradient)'
    : 'url(#redGradient)';
}
 // Teams
get TeamsOffset(): number {
  return this.visibleArc -
    (this.Teams / 10) * this.visibleArc;
}
TeamsGradient(): string {
  return this.Teams < 5
    ? 'url(#redGradient)'
    : 'url(#blueGradient)';
}
// My Deligations
get MyDeligationsOffset(): number {
  return this.visibleArc -
    (this.MyDeligations / 25) * this.visibleArc;
}

 MyDeligationsGradient(): string {
  return this.MyDeligations < 12
    ? 'url(#redGradient)'
    : 'url(#blueGradient)';
}
//Delegation Approval
get DelegationApprovalOffset(): number {
  return this.visibleArc -
    (this.DelegationApproval / 5) * this.visibleArc;
}
DelegationApprovalGradient(): string {
  return this.DelegationApproval < 3
    ? 'url(#blueGradient)'
    : 'url(#redGradient)';
}
//search from table 
search: string = '';

// Table data
  tableData = [
    { timestamp: '2026-06-01 09:23', user: 'john.doe@example.com', action: 'CREATE', resource: 'Role: AUDITOR', details: 'Added new compliance auditor role' },
    { timestamp: '2026-06-01 08:45', user: 'jane.smith@example.com', action: 'CREATE', resource: 'Role: AUDITOR', details: 'Added new compliance auditor role' },
    { timestamp: '2026-06-01 08:12', user: 'admin@gibe.com', action: 'CREATE', resource: 'Role: ADMIN', details: 'Added new compliance auditor role' }
  ];
  // Filtered data based on search
  get filteredData() {
    if (!this.search) {
      return this.tableData;
    }
    
    const term = this.search.toLowerCase();
    const userStartsWith: any[] = [];
    const otherStartsWith: any[] = [];
    const userContains: any[] = [];
    const otherContains: any[] = [];
    
    this.tableData.forEach(item => {
      const userLower = item.user.toLowerCase();
      const actionLower = item.action.toLowerCase();
      const resourceLower = item.resource.toLowerCase();
      const detailsLower = item.details.toLowerCase();

      if (userLower.startsWith(term)) {
        userStartsWith.push(item);
      }
      else if (actionLower.startsWith(term) || resourceLower.startsWith(term) || detailsLower.startsWith(term)) {
        otherStartsWith.push(item);
      }
      else if (userLower.includes(term)) {
        userContains.push(item);
      }
      else if (actionLower.includes(term) || resourceLower.includes(term) || detailsLower.includes(term)) {
        otherContains.push(item);
      }
    });
    
    return [...userStartsWith, ...otherStartsWith, ...userContains, ...otherContains];
  }
  
  clearSearch() {
    this.search = '';
  }

}
