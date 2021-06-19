import axios, { AxiosRequestConfig } from 'axios';
import { CurrentPriceResponse } from './interfaces';

class CoinDesk {
  static baseUrl = 'https://api.coindesk.com/v1/';

  private static async makeRequest(endpoint: string) {
    const requestConfig: AxiosRequestConfig = {
      url: endpoint,
      method: 'GET',
      baseURL: this.baseUrl,
    };

    return (await axios.request(requestConfig)).data;
  }

  static currentPrice(): Promise<CurrentPriceResponse> {
    return this.makeRequest('bpi/currentprice.json');
  }
}

export default CoinDesk;
