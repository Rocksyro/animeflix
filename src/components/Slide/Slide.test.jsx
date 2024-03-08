import { describe, expect, test } from "vitest";

// describe sirve para agrupar distintos test
describe("Test from <Slide />", () => {
  // test son los test unitarios
  test("should add two numbers", () => {
    // expect sería lo que espera este test
    expect(1 + 1).toBe(2);
  });
});
