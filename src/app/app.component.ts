import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Simulateur de Rendement Immobilier</h1>
    <app-input-form (calculate)="onCalculate($event)"></app-input-form>
    <app-results-display [results]="results"></app-results-display>
  `,
  styles: [],
})
export class AppComponent {
  results: any;

  onCalculate(data: any) {
    this.results = data;
  }
}
