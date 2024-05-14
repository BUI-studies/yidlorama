export type UniversalTableProps<D> = {
  data: D[]

  headers: {
    title: string;
    property: keyof D;
  }[]
}