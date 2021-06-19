import CoinDesk from './index';

it('should return currentPrice endpoint', async () => {
  const r = await CoinDesk.currentPrice();
  expect(r.chartName).toEqual('Bitcoin');
});
