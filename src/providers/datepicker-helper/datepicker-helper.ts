import { Injectable } from '@angular/core';

/*
  Generated class for the DatepickerHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatepickerHelperProvider {

    public static svgArrow: string = '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 386.257 386.257" style="enable-background:new 0 0 386.257 386.257;" xml:space="preserve"><polygon points="0,96.879 193.129,289.379 386.257,96.879 "/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

    constructor() {
        console.log('Hello DatepickerHelperProvider Provider');
    }

}
