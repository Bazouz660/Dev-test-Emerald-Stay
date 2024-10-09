import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculationService {
  calculateRendement(data: any): any[] {
    const { buyPrice, monthlyRent, annualCharges } = data;
    const agencyFees = [0.3, 0.25, 0.2];
    const results = [];
    const span = 3;

    for (let i = 0; i < span; i++) {
      const year = i + 1;
      if (i > agencyFees.length) break;
      const frais = monthlyRent * 12 * agencyFees[i];
      const netAnnualIncome = monthlyRent * 12 - frais - annualCharges;
      const annualYield = netAnnualIncome / buyPrice;
      const netMontlyIncome = netAnnualIncome / 12;

      results.push({
        year,
        netMontlyIncome,
        annualYield,
      });
    }

    return results;
  }
}
