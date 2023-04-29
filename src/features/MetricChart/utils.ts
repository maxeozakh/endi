export const getWeekStructure = () => {
  const today = new Date()

  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6)

  const weekStructure: string[] = []
  for (let i = 0; i < 7; i++) {
    const day = new Date(lastWeek)
    day.setDate(day.getDate() + i)
    weekStructure.push(day.toDateString())
  }

  return weekStructure
}
