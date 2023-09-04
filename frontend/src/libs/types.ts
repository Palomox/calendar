export type CalendarEvent = {
    type: CalendarEventType
    label: string
}

export type CalendarEventType = {
    name: string
    prefix: string
    color: string
}

export type CalendarPeriod = {
    name: string
    color: string
    startDate: number
    endDate: number
    priority: number
}
