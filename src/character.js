export default class Character {
  constructor(strength, dexterity, intelligence) {
    this.str = strength;
    this.dex = dexterity;
    this.int = intelligence;
  }
  determineClass() {
    if (this.str > this.dex && this.str > this.int) {
      return "Tank";
    } else if (this.dex > this.str && this.dex > this.int) {
      return "Rogue";
    } else if (this.int > this.str && this.int > this.dex) {
      return "Caster";
    } else {
      return "Undetermined";
    }
  }
}
