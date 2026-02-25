export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return ` ${txt.slice(0, max)} ...`;
  return txt;
}

/**
 * Formats a number string with commas as thousand separators.
 * e.g. "1000000" => "1,000,000"
 */
export function numberWithCommas(x: string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
