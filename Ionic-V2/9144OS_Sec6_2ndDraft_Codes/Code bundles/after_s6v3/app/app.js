import {App, IonicApp, Platform, Config} from 'ionic/ionic';

import {SettingsPage} from './pages/settings/settings';
import {SearchPage} from './pages/search/search';
import {JSONP_PROVIDERS} from 'angular2/http';
import {ContactusPage} from './pages/contactus/contactus';
import {Itunes} from './itunes/itunes';

@App({
  templateUrl: 'build/app.html',
  config: {},
  providers: [JSONP_PROVIDERS, Itunes]
})
class MyApp {
  constructor(app: IonicApp, platform: Platform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search...', component: SearchPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Contact us', component: ContactusPage }
    ];

    this.rootPage = SearchPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
