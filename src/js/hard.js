class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
      if (this.name.includes('Aged Brie')) {
          this.type = 'aged';
      } else if ( this.name.includes('Backstage')) {
          this.type = 'ticket';
      } else if (this.name.includes('Conjured')) {
          this.type = 'conjured';
      } else if (this.name.includes('Sulfuras')) {
          this.type = 'legendary';
      } else {
          this.type = 'normal';
      }
  };

  tick() {
    // addType(this);

    if (this.type === 'aged') {
        this.tickAged()
    } else if (this.type === 'conjured') {
        console.log('conjured')
    } else if (this.type === 'legendary') {
        console.log('legendary')
    } else if (this.type === 'ticket') {
        console.log('Rock on dude!')
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
  tickAged() {
    this.sellIn--;
    this.quality++;
    if (this.sellIn < 0) {
      this.quality++;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
};



export { GildedRose };
