import { Period } from '../../shared/interfaces'

export const getChartStrucutre = (period: Period) => {
  let pastDays = null

  switch (period) {
    case Period.WEEK:
      pastDays = 6
      break
    case Period.MONTH:
      pastDays = 29
      break
  }

  const today = new Date()

  const past = new Date(today.getFullYear(), today.getMonth(), today.getDate() - pastDays)

  const structure: string[] = []
  for (let i = 0; i < pastDays + 1; i++) {
    const day = new Date(past)
    day.setDate(day.getDate() + i)
    structure.push(day.toDateString())
  }

  return structure
}
