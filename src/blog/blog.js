export class Blog {

  constructor() {
    this.bookImage = 'https://images-na.ssl-images-amazon.com/images/I/51YmDHWgMvL._SX260_.jpg';
    this.mediumImage = 'https://cdn.dribbble.com/users/314298/screenshots/3796877/medium-dribbble.png';
    this.horizontal = true;
    this.coronavirusArticleImage = 'https://miro.medium.com/max/6408/1*F44zSvRWyD39mkOarDQjBg.png';
    this.tracingPostImage = 'https://miro.medium.com/max/2000/1*yeie9sVoh-oJ8xrOlbTGxQ.png';
    this.kubelessPostImage = 'https://miro.medium.com/max/1400/1*KVp1bQM_wScAUvgGxQdf3w.png';
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
