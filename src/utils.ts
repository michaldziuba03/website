export function getFormattedDate(date?: Date): string | null {
  if (!date) {
    return null;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
