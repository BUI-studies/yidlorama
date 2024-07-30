export interface BaseData {
  id: string | number;
};

export type UniversalTableProps<D> = {
  data: D[]

  headers: {
    title: string;
    property: keyof D;
  }[]
}