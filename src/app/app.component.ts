import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-playground';

  @ViewChild('myIframe') myIframe: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data: any) => {
        console.log(data);
        this.myIframe.nativeElement.contentWindow.postMessage(data, 'https://google.com');
      });
  }

  onIframeLoad() {
    console.log('Iframe loaded!');
  }
}
