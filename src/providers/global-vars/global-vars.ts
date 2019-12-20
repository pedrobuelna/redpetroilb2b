import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarsProvider {

    constructor() {}

    
    private _preferencias : any = {
        "graficaDiesel" : {
            "status" : true
        },
        "graficaMagna" : {
            "status" : true
        },
        "graficaPremium" : {
            "status" : false
        },
        "graficaUno" : {
            "status" : false
        },
        "graficaDos" : {
            "status" : true
        },
    }
    public get preferencias() : any {
        return this._preferencias;
    }
    public set preferencias(v : any) {
        this._preferencias = v;
    }
    
    
    private _isAndroid : boolean = false;
    public get isAndroid() : boolean {
        return this._isAndroid;
    }
    public set isAndroid(v : boolean) {
        this._isAndroid = v;
    }
    
    private _isIOS : boolean = false;
    public get isIOS() : boolean {
        return this._isIOS;
    }
    public set isIOS(v : boolean) {
        this._isIOS = v;
    }    

    
    private _pages : any;
    public get pages() : any {
        return this._pages;
    }
    public set pages(v : any) {
        this._pages = v;
    }
    
    
    private _logged : boolean = false;
    public get logged() : boolean {
        return this._logged;
    }
    public set logged(v : boolean) {
        this._logged = v;
    }
    
    private _activo : any;
    public get activo() : any {
        return this._logged;
    }
    public set activo(v : any) {
        this._activo = v;
    }

}
