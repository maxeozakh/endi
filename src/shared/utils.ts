export const isDateIsToday = (date: string) => {
  return new Date(date).toDateString() === new Date().toDateString()
}

export const isDateIsYesterday = (date: string) => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return new Date(date).toDateString() === yesterday.toDateString()
}

export const isInThisWeek = (date: Date) => {
  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    23,
    59,
    59
  )
  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6)

  return date > lastWeek && date <= today
}

export const isInThisMonth = (date: Date) => {
  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    23,
    59,
    59
  )
  const past = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29)

  return date > past && date <= today
}
