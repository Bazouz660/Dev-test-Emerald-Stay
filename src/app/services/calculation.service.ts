import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculationService {
  calculateRendement(data: any): any[] {
    const { prixAchat, loyerMensuel, chargesAnnuelles } = data;
    const fraisAgence = [0.3, 0.25, 0.2];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const annee = i + 1;
      const frais = loyerMensuel * 12 * fraisAgence[i];
      const revenuNetAnnuel = loyerMensuel * 12 - frais - chargesAnnuelles;
      const rendementAnnuel = revenuNetAnnuel / prixAchat;
      const revenuNetMensuel = revenuNetAnnuel / 12;

      results.push({
        annee,
        revenuNetMensuel,
        rendementAnnuel,
      });
    }

    return results;
  }
}
