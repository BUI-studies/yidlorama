export type BaseData = {
  id: string | number;
};

export type UniversalTableProps<D extends BaseData> = {
  data: D[]

  headers: {
    title: string;
    property: keyof D;
  }[]
}