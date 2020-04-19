import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';


@Injectable({
    providedIn: 'root'
})

export class ApiPerfrencesService implements OnInit {

    public loading = false;
    public baseURL = "assets/json/"
    public isNetwork: boolean;
    public globalURL: string;
    public sendObj = { "User": { "Email": "leedorb@gmail.com" } }
    constructor(private http: HttpClient, public settings: GlobalService) {
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }


    ngOnInit() {

    }

    getDiets() {
        return new Promise(async (resolve, reject) => {
            try {
                if (await this.settings.checkIsNetwork())
                    await this.http.get(this.globalURL + '/Diets/get').subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    await this.http.get(this.baseURL + 'diets.json').subscribe(data => { console.log(data); resolve(data); });

            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

    sendDietToServer(dietId) {
        return new Promise(async (resolve, reject) => {
            try {
                let ob = { "User": { "Email": "leedorb@gmail.com" }, "DietsUUID": [dietId] }
                if (await this.settings.checkIsNetwork())
                    await this.http.post(this.globalURL + '/PatientSettings/SetPatientDiets', ob).subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    alert("No internet")

            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }
}