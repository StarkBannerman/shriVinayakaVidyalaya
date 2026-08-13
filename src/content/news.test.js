import { NEWS_EVENTS, formatEventDate } from "./news";

test("every news entry is complete and has a stable id", () => {
  const ids = new Set();
  NEWS_EVENTS.forEach((event) => {
    expect(event.id).toBeTruthy();
    expect(ids.has(event.id)).toBe(false);
    ids.add(event.id);
    expect(event.name).toBeTruthy();
    expect(event.image).toBeTruthy();
    expect(event.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

test("dates render as dd/mm/yyyy", () => {
  expect(formatEventDate("2024-11-01")).toBe("01/11/2024");
});
