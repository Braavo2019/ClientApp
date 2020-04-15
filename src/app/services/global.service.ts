import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalURL = "http://www.braavolife.com/api/";
  public isNetwork = false;

  constructor(public platform: Platform, private network: Network) { }

  checkIsNetwork() {
    return new Promise(async (resolve, reject) => {
      if (this.platform.is('cordova')) {
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          console.log('network was disconnected :-(');
          this.isNetwork = false;
          resolve(this.isNetwork);
        });
        disconnectSubscription.unsubscribe();

        let connectSubscription = this.network.onConnect().subscribe(() => {
          console.log('network connected!');
          this.isNetwork = true;
          resolve(this.isNetwork);
        });
        connectSubscription.unsubscribe();
      } else {
        resolve(this.isNetwork);
      }
    })
  }
}
