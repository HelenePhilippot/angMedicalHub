export interface CalendarEvent<MetaType = any> {
  start: Date;
  end?: Date;
  title?: string;
}
