export const isDateIsToday = (date: string) => {
  return new Date(date).toDateString() === new Date().toDateString()
}

export const isDateIsYesterday = (date: string) => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return new Date(date).toDateString() === yesterday.toDateString()
}
