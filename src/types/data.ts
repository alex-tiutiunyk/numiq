export interface IRow {
  id: string;
  title: string;
  textTooltip: string;
  url: string;
  price: number;
  units: string;
  visibleWhenLogin: boolean;
  visibleWhenProfi: boolean;
  checkbox: boolean;
}

export interface IData {
  titleSection: string;
  dataUpdated: string;
  id: number;
  isBlockOpen: boolean;
  rows: IRow[];
}
