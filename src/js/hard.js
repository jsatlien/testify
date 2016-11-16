class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
      if (this.name.includes('Aged')) {
          this.type = 'aged';
      } else if ( this.name.includes('Backstage')) {
          this.type = 'ticket';
      } else if (this.name.includes('Conjured')) {
          this.type = 'conjured';
      } else if (this.name.includes('Sulfuras')) {
          this.type = 'legendary';
      } else {
          this.type = 'normal';
      };
  };
  
  tick() {
    if (this.type === 'aged') {
        this.tickAged();
    } else if (this.type === 'conjured') {
        this.tickConjured();
    } else if (this.type === 'legendary') {
        this.quality = this.quality;
    } else if (this.type === 'ticket') {
        this.tickTicket();
    } else {
        this.tickNormal();
    };
  };

  tickAged() {
    this.sellIn--;
    this.quality++;
    if (this.sellIn < 0) {
      this.quality++;
    };
    if (this.quality > 50) {
      this.quality = 50;
    };
  };

  tickTicket() {
    this.sellIn--;
    if (this.sellIn < 0) {
        this.quality = 0;
    } else if (this.sellIn < 5) {
        this.quality += 3;
    } else if (this.sellIn < 10) {
        this.quality += 2;
    } else { this.quality++}
    if (this.quality > 50 ) {
        this.quality = 50;
    };
  };

  tickConjured() {
    this.sellIn--;
    if (this.sellIn <= 0) {
        this.quality -= 4;
    } else if (this.sellIn > 0) {
        this.quality -= 2;
    } else {
        this.quality;
    };
    if (this.quality < 0) {
      this.quality = 0;
    };
  };

  tickNormal() {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality--;
    } else {
      this.quality -= 2;
    };
    if (this.quality < 0) {
      this.quality = 0;
    };
  };

};



export { GildedRose };
