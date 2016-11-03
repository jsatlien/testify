class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    this.sellIn = this.sellIn - 1;
    this.quality = this.quality -1;
  }

}




export { GildedRose };
