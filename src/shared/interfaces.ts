export type RouteProps = {
  params: { metricName: string; metricId?: string }
  key: string
  name: string
}

export enum Period {
  WEEK = 'week',
  MONTH = 'month',
}
