import yargs from 'yargs';
import CoinDesk from './coin-desk';
import { Currency } from './coin-desk/interfaces';
import { decode } from 'html-entities';

const argv = yargs(process.argv.slice(2)).options({
  d: { type: 'number', default: 1 },
  i: { type: 'number', default: 1 },
}).argv;

const duration = argv.d * 1000; // get cl arg duration and convert to ms
const interval = argv.i * 1000; // get cl arg interval and convert to ms

/**
 * Requests, formats & prints the latest BTC prices.
 */
const printPrice = async () => {
  const data = await CoinDesk.currentPrice();

  const formatPriceRow = (cur: Currency) => {
    const symbol = decode(cur.symbol); // decodes the html code into symbol
    const rate = cur.rate.slice(0, -2); // formats current rate to 10th of pence/cent.
    return `\n[${cur.code}] ${symbol + rate}`;
  };

  const header = `\n${data.chartName} Prices - ${data.time.updateduk}`;
  const priceString = Object.values(data.bpi).map(formatPriceRow).join('');

  console.log(header + priceString);
};

/**
 * Calls printPrice function at the given interval, raises exp if cannot connect to endpoint.
 */
const intervalFn = async (duration: number, interval: number) => {
  duration = duration - interval;
  try {
    await printPrice();
    duration >= 0 && setTimeout(() => intervalFn(duration, interval), interval);
  } catch (e) {
    console.warn('There was an error attempting to fetch price data. Please try again later.');
  }
};

(async () => intervalFn(duration, interval))();
