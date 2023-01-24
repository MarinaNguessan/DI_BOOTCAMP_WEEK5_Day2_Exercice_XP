import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ServiceWorkerServiceService } from './service/service-worker-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  titile = 'shellApp';

constructor(service:ServiceWorkerServiceService){

}
}
