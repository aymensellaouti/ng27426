import { Btc2UsdPipe } from './btc2-usd-pipe';

describe('Btc2UsdPipe', () => {
  it('create an instance', () => {
    const pipe = new Btc2UsdPipe();
    expect(pipe).toBeTruthy();
  });
});
