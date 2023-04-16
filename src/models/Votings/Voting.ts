import getRandomInt from "../../utils/getRandomInt";

export default class Voting {
  public votes: { [id: string]: string } = {};

  addVote(voter: string, candidate: string) {
    this.votes[voter] = candidate;
  }

  getResult(candidates: string[]) {
    let countedDuplicates: { [id: string]: number } = {};
    candidates.forEach((id) => {
      countedDuplicates[id] = (countedDuplicates[id] || 0) + 1;
    });

    let max = 0;

    Object.keys(countedDuplicates).forEach((k) => {
      if (countedDuplicates[k] > max) {
        max = countedDuplicates[k];
      }
    });

    let maxCandidates = Object.entries(countedDuplicates).filter(
      (e) => e[1] === max
    );

    //Majority
    if (maxCandidates.length === 1) {
      return maxCandidates[0][0];
    } else {
      return maxCandidates[getRandomInt(0, maxCandidates.length - 1)][0];
    }
  }
}
