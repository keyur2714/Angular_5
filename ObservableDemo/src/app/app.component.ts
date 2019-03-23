import { Component,OnInit,OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'ObservableDemo';
  numSubscription : Subscription;
  numberObservable:  Observable<number> = interval(1000);
  num : number = 0;
  ngOnInit(){    
    // this.numSubscription = this.numberObservable.subscribe(
    //   (num:number)=>{
    //     this.num = num;
    //   }
    // )
    this.numberObservable.toPromise().then((data)=>{
      alert(1);
      console.log(data+" -----");
      }).catch(
      (e)=>{
        alert(e);
      }
    );
  }

  ngOnDestroy(){    
    this.numSubscription.unsubscribe();
  }
}
