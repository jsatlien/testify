class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
      if (this.name.includes('Aged Brie')) {
          this.type = 'aged';
      } else if ( this.name.includes('Backstage')) {
          this.type = 'aged';
      } else if (this.name.includes('Conjured')) {
          this.type = 'conjured';
      } else if (this.name.includes('Sulfuras')) {
          this.type = 'legendary';
      } else {
          this.type = 'normal';
    };
  }


  tick() {
    // addType(this);

    if (this.type === 'aged') {
        console.log('aged')
    } else if (this.type === 'conjured') {
        console.log('conjured')
    } else if (this.type === 'legendary') {
        console.log('legendary')
    } else {
        this.tickNormal()// this.type = 'normal'
    }
  };
  tickNormal() {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality--
    } else {
      this.quality = this.quality - 2
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  };
}



export { GildedRose };
