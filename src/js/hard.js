class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick() {
    addType(this);

    if (this.type = 'aged') {

    } else if (this.type = 'conjured') {

    } else if (this.type = 'legendary') {

    } else {
      // this.type = 'normal'
    }
  }
}

function addType(item) {
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

export { GildedRose };
