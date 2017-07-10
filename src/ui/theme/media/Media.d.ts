declare interface MediaSizes {
  [key: string]: () => void,
  large?: () => void,
  medium?: () => void,
  small?: () => void
}

declare type MediaQueries = MediaSizes | {}

declare interface Media {
  media?: MediaQueries
}
