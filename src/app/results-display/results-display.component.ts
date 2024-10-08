import { Component, Input } from "@angular/core";

@Component({
  selector: "app-results-display",
  templateUrl: "./results-display.component.html",
  styles: [],
})
export class ResultsDisplayComponent {
  @Input() results: any;
}
