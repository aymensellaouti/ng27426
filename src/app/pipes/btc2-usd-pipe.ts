import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../config/app-const.config';

@Pipe({
  name: 'btc2Usd'
})
export class Btc2UsdPipe implements PipeTransform {

  transform(amount: number, isBtcUsd = true): number {
    return isBtcUsd ? amount * APP_CONST.btcUsd : amount / APP_CONST.btcUsd;
  }

}
