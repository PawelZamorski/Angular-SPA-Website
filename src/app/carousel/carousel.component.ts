import { Component, OnInit } from '@angular/core';
import { ImgDataService } from '../services/img-data.service';

import { ImgData } from '../services/img-data.service';

const url = '../assets/data/carousel.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

// The component CarouselComponent has a property carouselData that is an array of type ImgData
private carouselData: ImgData[] = [];
// Properties for displaying and hiding carousel elements
private displayItemIndex: number = -1; // controls which item to display
private hideItemIndex: number = 0 // controls which item to hide
private collection: HTMLCollectionOf<HTMLElement> = null; // collection of elements with specific class
private dotCollection: HTMLCollectionOf<HTMLElement> = null; // collection of elements with specific class

constructor(private imgDS: ImgDataService) { }

  ngOnInit() {
     this.getCarouselData(url);
  }

  getCarouselData(dataUrl: string): void {
    const usubscribe$ = this.imgDS.getImgData(dataUrl)
      .subscribe(
        data => {
          this.carouselData = data;
        },
        error => console.log('Error in CarouselComponent observable: ' + error),
        () => {
          // Run carousel. Use setTimeout as carousel may not be rendered yet.
          setTimeout(() => { // Use arrow function to avoid 'this' context issue
            this.runCarousel(0, 5000);
          }, 0);
        }
      );
  }

  // Functions for controling carousel
  getElements(className: string): HTMLCollectionOf<HTMLElement> {
    // HTMLElement refers explicitly to an HTML element whereas Element may refer to an XML element.
    // HTMLElements inherit from Element which inherit from Node.
    // use type assertion 'as' to assert to HTMLElement
    return document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
  }

  // This method supports IE10
  changeClassList(coll: HTMLCollectionOf<HTMLElement>, index: number, removeClassName: string, addClassName: string): void {
    // DOMTokenList.remove() - If the string does not exist in the list, no error is thrown, and nothing happens.
    // source: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
    if(this.collection[index].classList) { // Check if classList property is supported by browser
      coll[index].classList.remove(removeClassName); // supported in IE10
      coll[index].classList.add(addClassName); // supported in IE10  
    } else { // Support older browser (IE9) using className
      // Removes class from the className list
      coll[index].className.replace(" " + removeClassName, "");
      // Adds Class to the className list
      coll[index].className += " " + addClassName;
    }
  }

  // Run carousel infinatelly
  runCarousel(startIndex: number, interval: number): void {
    // get the collection of elements with class 'app-carousel-content'
    if(this.collection == null) this.collection = this.getElements('app-carousel-content');
    // get the collection of elements with class 'app-dot'
    if(this.dotCollection == null) this.dotCollection = this.getElements('app-dot');

    this.displayItemIndex = startIndex;

    setInterval(() => {
      if(this.displayItemIndex >= this.collection.length) this.displayItemIndex = 0;
      // hide element
      this.changeClassList(this.collection, this.hideItemIndex, 'app-carousel-showElement', 'app-display-none');
      // disactivate dot
      this.changeClassList(this.dotCollection, this.hideItemIndex, 'app-dot-active', 'app-dot-disactive');
      // track the index of element to manipulate in the next loop
      this.hideItemIndex = this.displayItemIndex;

      // show element
      this.changeClassList(this.collection, this.displayItemIndex, 'app-display-none', 'app-carousel-showElement');
      // activate dot
      this.changeClassList(this.dotCollection, this.displayItemIndex, 'app-dot-disactive', 'app-dot-active');
      this.displayItemIndex++;
    }, interval);

  }

}
