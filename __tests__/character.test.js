import Character from "./../src/character.js";

describe("Character", () => {
  test("should correctly return each of the 3 attributes", () => {
    const charCreated = new Character(9, 20, 11);
    expect(charCreated.str).toEqual(9);
    expect(charCreated.dex).toEqual(20);
    expect(charCreated.int).toEqual(11);
  });
});
