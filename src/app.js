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
    } else if (cardType === 'sliderBlog') {
      return './blog/blog';
    } else if (cardType === 'textWithSimpleImage') {
      return './hobbies/hobbies';
    } else if (cardType === 'onlyImages') {
      return './collaboration/collaboration';
    }
  }
}
