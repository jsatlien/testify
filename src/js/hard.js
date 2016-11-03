class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if ( this.name === 'normal') {
      if (this. sellIn < 0) {
        this.sellIn = this.sellIn -1;
        this.quality = this.quality -2;
      }

      else {
      this.sellIn = this.sellIn - 1;
      this.quality = this.quality -1;
      }
    }
  }
}




export { GildedRose };
