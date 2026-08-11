/**
 * Validated categorical palette from the data-viz design system.
 * Assigned in fixed order, never cycled. Light values used for the
 * dashboard's light surface (the whole app renders on a light plane).
 */
export const SERIES = [
  '#2a78d6', // 1 blue
  '#eb6834', // 2 orange
  '#1baf7a', // 3 aqua
  '#eda100', // 4 yellow
  '#e87ba4', // 5 magenta
  '#008300', // 6 green
  '#4a3aa7', // 7 violet
  '#e34948', // 8 red
]

export const INK = {
  primary: '#0b0b0b',
  secondary: '#52514e',
  muted: '#898781',
  grid: '#e1e0d9',
  baseline: '#c3c2b7',
  surface: '#fcfcfb',
  plane: '#f9f9f7',
}

/** Stable color for a category chip. */
export function categoryColor(category) {
  const order = ['Platforms', 'Esports', 'Monetization', 'Content', 'Audience']
  const i = order.indexOf(category)
  return SERIES[i >= 0 ? i : SERIES.length - 1]
}
