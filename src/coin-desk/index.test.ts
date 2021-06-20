import CoinDesk from './index';

it('fetches currentPrice endpoint', async () => {
  const r = await CoinDesk.currentPrice();
  expect(r.chartName).toEqual('Bitcoin');
});
