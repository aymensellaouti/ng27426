import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from '../../config/app-const.config';

@Pipe({
  name: 'defaultImagePipe'
})
export class DefaultImagePipe implements PipeTransform {
  /**
   * Si le path est vide ou ne contient que desespaces on retourne une image par défaut sinon on ne fait rien
   * @param path la chaine à transformer
   * @returns
   */
  transform(image: string): string {
    return image.trim() ? image : APP_CONST.defaultImage;
  }

}
