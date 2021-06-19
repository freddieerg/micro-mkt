import axios, { AxiosRequestConfig } from 'axios';
import { CurrentPriceResponse } from './interfaces';

class CoinDesk {
  static baseUrl = 'https://api.coindesk.com/v1/';

  /**
   * Create and send a request to CoinDesk.
   * @param endpoint
   * @private
   */
  private static async makeRequest(endpoint: string) {
    const requestConfig: AxiosRequestConfig = {
      url: endpoint,
      method: 'GET',
      baseURL: this.baseUrl,
    };

    return (await axios.request(requestConfig)).data;
  }

  /**
   * Gets the current price of BTC.
   */
  public static currentPrice(): Promise<CurrentPriceResponse> {
    return this.makeRequest('bpi/currentprice.json');
  }
}

export default CoinDesk;
