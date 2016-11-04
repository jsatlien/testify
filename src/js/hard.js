



class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  addType() {
   if (item.name.includes('normal')) {
     this.type = 'normal';
   } else if (item.name.includes('conjured')) {
     this.type = 'conjured';
   } else if (item.name.includes('Sulfuras')) {
     this.type = 'legendary';
   } else if (item.name.includes('Aged') || item.name.includes('Backstage')) {
     item.type = 'aged';
   }
  }
  tick() {
    this.addType();

    if (this.type = 'aged') {

    } else if (this.type = 'conjured') {

    } else if (this.type = 'legendary') {

    } else {
        this.tickNormal()// this.type = 'normal'
    }
  }
  tickNormal() {
    this.sellIn--
    if (this.quality < 0) {
      this.quality = 0;
    } else if (this.sellIn >= 0) {
      this.quality--
    } else {
      this.quality = this.quality - 2
    }
  }
}



export { GildedRose };
