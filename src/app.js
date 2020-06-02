export class App {

  async attached() {
    this.profile = await fetch('profile.json')
      .then(response => response.json());
  }

  selectViewModel(cardType) {
    if (cardType === 'imageAndText') {
      return './home/home';
    } else if (cardType === 'carouselAndText') {
      return './certifications/certifications';
    }
  }
}
