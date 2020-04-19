import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';


@Injectable({
    providedIn: 'root'
})

export class MyDayService implements OnInit {

    selectedMeal = new BehaviorSubject(false);
    selectedMealRefresh = new BehaviorSubject(false);
    public loading = false;
    public baseURL = "assets/json/"
    public isNetwork: boolean;
    public globalURL: string;
    public sendObj = { "User": { "Email": "leedorb@gmail.com" } }


    constructor(private http: HttpClient, public settings: GlobalService, ) {
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }


    ngOnInit() {

    }

    getMyDayProduct() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.http.get(this.baseURL + 'myDay.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

    getMeals() {
        return new Promise(async (resolve, reject) => {
            try {
             
                if (await this.settings.checkIsNetwork())
                    await this.http.post(this.globalURL + 'UserMenu/GetDailyMenu', this.sendObj).subscribe(data => { console.log("GetDailyMenu : ", data); resolve(data); });
                else
                    await this.http.get(this.baseURL + 'GetDailyMenu.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                await this.http.get(this.baseURL + 'GetDailyMenu.json').subscribe(data => { console.log(data); resolve(data); });
                console.log(err);
            } finally {
            }
        });
    }

}