export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}
export interface Bpi {
  USD: Currency;
  GBP: Currency;
  EUR: Currency;
}
export interface Currency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface CurrentPriceResponse {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}
