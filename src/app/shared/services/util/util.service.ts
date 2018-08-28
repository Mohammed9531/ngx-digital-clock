import { Injectable } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class UtilService {

  /**
   * @constructor
   */
  constructor() { }

  public to2Digit(str: string): string {
    if (!str) { return null; }

    const isString: boolean = (typeof str == 'string');
    if (isString && str.length == 1) {
      str = 0 + str;
    }
    return str;
  }
}
