import { Match } from "./match";
export class Matche {
    private match: Match;

    constructor(match: Match) {
      this.match = match;
    }
  
    getCountryName(): string {
      return this.match.country.name;
    }
  
    getAwayTeamName(): string {
      return this.match.away.name;
    }
}
