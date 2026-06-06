import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
}
