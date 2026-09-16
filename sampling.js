// Seeded sampling makes this small experiment reproducible.
export function makeSamples(count, seed) {
  let state = seed >>> 0
  const uniform = () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0
    return (state + 1) / 4294967297
  }
  return Array.from(
    { length: count },
    () =>
      Math.sqrt(-2 * Math.log(uniform())) * Math.cos(2 * Math.PI * uniform()),
  )
}

export function summarizeSamples(samples) {
  const bins = Array(24).fill(0)
  let total = 0
  let outside = 0
  for (const value of samples) {
    total += value
    const bin = Math.floor(((value + 4) / 8) * bins.length)
    if (bin >= 0 && bin < bins.length) bins[bin]++
    else outside++
  }
  return { bins, outside, mean: samples.length ? total / samples.length : 0 }
}
