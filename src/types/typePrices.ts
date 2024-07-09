export type TypePrices = {
  id: number;
  title: string;
  listprices: TypeListPrices[];
};

export type TypeListPrices = {
  id: number;
  name: string;
  price: number;
};
