export type navigationProps = {
  navigate: (screen?: string) => void
  goBack: () => void
  reset: (index: number, routeNames: string[]) => void
  push: (screen: string) => void
  getCurrentRoute: () => { name: string }
}
