import { Component } from '@angular/core';
import { IonTabs, IonTabButton, IonIcon, IonTabBar, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trophyOutline, gameControllerOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonTabBar, IonIcon, IonTabButton, IonTabs],
})
export class TabsPage {
  constructor() {
    addIcons({ trophyOutline, gameControllerOutline, personCircleOutline });
  }
}
