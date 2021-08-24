import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';


@Component({
  selector: 'app-portfolio',
  templateUrl: './print-media.component.html',
  styleUrls: ['./print-media.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  showGalleryFlyer = (index: number) => {
    let prop = {
      images: [
        {path: './assets/print-media/print1.jpg'},
        {path: './assets/print-media/print2.jpg'},
        {path: './assets/print-media/print3.jpg'},
        {path: './assets/print-media/print37.jpg'},
        {path: './assets/print-media/print38.jpg'},
        {path: './assets/print-media/print39.jpg'},
        {path: './assets/print-media/print40.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGallerybc = (index: number) => {
    let prop = {
      images: [
        {path: './assets/print-media/print25.jpg'},
        {path: './assets/print-media/print31.jpg'},
        {path: './assets/print-media/print32.jpg'},
        {path: './assets/print-media/print33.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryCatalog = (index: number) => {
    let prop = {
      images: [
        {path: './assets/print-media/print4.jpg'},
        {path: './assets/print-media/print5.jpg'},
        {path: './assets/print-media/print6.jpg'},
        {path: './assets/print-media/print7.jpg'},
        {path: './assets/print-media/print8.jpg'},
        {path: './assets/print-media/print9.jpg'},
        {path: './assets/print-media/print10.jpg'},
        {path: './assets/print-media/print11.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryEmodules = (index: number) => {
    let prop = {
      images: [
        {path: './assets/e-modules/image1.jpg'},
        {path: './assets/e-modules/image2.jpg'},
        {path: './assets/e-modules/image3.jpg'},
        {path: './assets/e-modules/image4.jpg'},
        {path: './assets/e-modules/image5.jpg'},
        {path: './assets/e-modules/image6.jpg'},
        {path: './assets/e-modules/image7.jpg'},
        {path: './assets/e-modules/image8.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryRedesigns = (index: number) => {
    let prop = {
      images: [
        {path: './assets/redesigns/image1.jpg'},
        {path: './assets/redesigns/image2.jpg'},
        {path: './assets/redesigns/image3.jpg'},
        {path: './assets/redesigns/image4.jpg'},
        {path: './assets/redesigns/image6.jpg'},
        {path: './assets/redesigns/image5.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryBranding(index: number) {
    let prop = {
      images: [
        {path: './assets/branding/image1.jpg'},
        {path: './assets/branding/image2.jpg'},
        {path: './assets/branding/image3.jpg'},
        {path: './assets/branding/image4.jpg'},
        {path: './assets/branding/image5.jpg'},
        {path: './assets/branding/image6.jpg'},
        {path: './assets/branding/image7.jpg'},
        {path: './assets/branding/image8.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryEtc = (index: number) =>{
    let prop = {
      images: [
        {path: './assets/print-media/print34.jpg'},
        {path: './assets/print-media/print35.jpg'},
        {path: './assets/print-media/print36.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryCorp = (index: number) => {
    let prop = {
      images: [
        {path: './assets/affiliates/image1.png'},
        {path: './assets/affiliates/image2.png'},
        {path: './assets/affiliates/image3.jpeg'},
        {path: './assets/affiliates/image4.png'},
        {path: './assets/affiliates/image6.png'},
        {path: './assets/affiliates/image7.jpeg'},
        {path: './assets/affiliates/image8.png'},
        {path: './assets/affiliates/image9.png'},
        {path: './assets/affiliates/image10.png'},
        {path: './assets/affiliates/image11.png'},
        {path: './assets/affiliates/image12.png'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryWeb = (index: number) => {
    let prop = {
      images: [
        {path: './assets/websites/web1.jpg'},
        {path: './assets/websites/web2.jpg'},
        {path: './assets/websites/web3.jpg'},
        {path: './assets/websites/web4.jpg'},
        {path: './assets/websites/web5.jpg'},
        {path: './assets/websites/web6.jpg'},
        {path: './assets/websites/web7.jpg'},
        {path: './assets/websites/web8.jpg'},
        {path: './assets/websites/web9.jpg'},
        {path: './assets/websites/web10.jpg'},
        {path: './assets/websites/web11.jpg'},
        {path: './assets/websites/web12.jpg'},
        {path: './assets/websites/web13.jpg'},
        {path: './assets/websites/web14.jpg'},
        {path: './assets/websites/web15.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

  showGalleryUi = (index: number) => {
    let prop = {
      images: [
        {path: './assets/affiliates/other1.jpg'},
        {path: './assets/affiliates/other2.jpg'},
        {path: './assets/affiliates/other3.jpg'},
        {path: './assets/affiliates/other4.jpg'},
        {path: './assets/affiliates/other5.jpg'}
      ],
      index
    };
    this.gallery.load(prop);
  }

}
