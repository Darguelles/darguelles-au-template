export class Home {

  constructor() {
    this.message = 'success';
    this.imageLink = 'https://instagram.faep3-1.fna.fbcdn.net/vp/faf73b087aebead3f051595e179eae38/5D7E37BF/t51.2885-15' +
      '/sh0.08/e35/s640x640/40463181_146122846326301_6667826362226144269_n.jpg?_nc_ht=instagram.faep3-1.fna.fbcdn.net';
    this.horizontal = true;
  }

  attached() {
    this.detectWidthChange();
  }

  detectWidthChange() {
    if (window.screen.width < 700) {
      this.horizontal = false;
    }
  }
}
