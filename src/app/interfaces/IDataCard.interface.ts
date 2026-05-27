export interface IDataCard {
  title: string;
  numberComponents: number;
}

export interface INavList extends IDataCard {
  icon: string;
  description: string;
  color: string;
}
