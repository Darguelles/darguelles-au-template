export class Blog {

  constructor() {
    this.bookImage = 'https://images-na.ssl-images-amazon.com/images/I/51YmDHWgMvL._SX260_.jpg';
    this.mediumImage = 'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/68/4c/90/684c9048-c9cb-8afd-c6bb-083364' +
      '06d38f/MediumIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/246x0w.jpg';
    this.horizontal = true;
    this.coronavirusArticleImage = 'https://miro.medium.com/max/6408/1*F44zSvRWyD39mkOarDQjBg.png';
    this.feignArticle = 'https://miro.medium.com/max/8064/1*HojYbuC_91aMCJO41MTtHw.jpeg';
    this.onionArticle = 'https://miro.medium.com/max/7206/1*M1RdXI4KGq7uFTbNHbGCmQ.jpeg';
  }

  attached() {
    this.detectWidthChange();
  }

  detectWidthChange() {
    if (window.screen.width < 700) {
      this.horizontal = false;
      this.bookImage = 'https://images-na.ssl-images-amazon.com/images/I/71gDPtwGRTL.jpg'
      this.mediumImage = 'https://cdn.dribbble.com/users/314298/screenshots/3796877/medium-dribbble.png'
    }
  }
}
