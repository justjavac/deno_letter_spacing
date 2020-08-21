/**
 * Set the horizontal spacing behavior between text characters.
 *
 * @param str
 * @param count default `1` 
 */
export default function space(str: string, count = 1): string {
  return [...str].join(" ".repeat(count));
}
