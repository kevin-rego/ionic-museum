import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  text;
  constructor(private toastController: ToastController) {}
  ngOnInit(): void {
    
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: `Thanks, ${this.text} `,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
