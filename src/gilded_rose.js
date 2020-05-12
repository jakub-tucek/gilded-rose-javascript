const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

export class Item {
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class Shop {
    constructor(items=[]){
        this.items = items;
    }

    sellInLessThanValue(sellIn, value) {
        return sellIn < value;
    }

    increaseQualityByOne(item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }

    decreaseQualityByOne(item) {
        if (item.quality > 0) {
            item.quality = item.quality - 1;
        }
    }

    decreaseSellInByOne(item) {
        item.sellIn = item.sellIn - 1;
    }

    resetQualityToZero(item) {
        item.quality = 0;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === SULFURAS) {
                continue;
            }

            if (this.items[i].name === BACKSTAGE) {
                if (this.items[i].sellIn > 10) {
                    this.increaseQualityByOne(this.items[i]);
                }

                if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) {
                    this.items[i].quality = this.items[i].quality + 2;
                }

                if (this.items[i].sellIn <= 5) {
                    this.items[i].quality = this.items[i].quality + 3;
                }

                if (this.items[i].sellIn === 0) {
                    this.resetQualityToZero(this.items[i]);
                }

                this.decreaseSellInByOne(this.items[i]);
                continue;
            }

            if (this.items[i].name === BRIE) {
                if (this.items[i].sellIn > 0) {
                    this.increaseQualityByOne(this.items[i]);
                }

                if (this.items[i].sellIn === 0) {
                    this.items[i].quality = this.items[i].quality + 2;
                }

                if (this.items[i].quality > 50) {
                    this.items[i].quality = 50;
                }

                this.decreaseSellInByOne(this.items[i]);
                continue;
            }

            this.decreaseQualityByOne(this.items[i]);
            this.decreaseSellInByOne(this.items[i]);

            if (this.sellInLessThanValue(this.items[i].sellIn, 0)) {
                this.decreaseQualityByOne(this.items[i]);
            }
        }

        return this.items;
    }
}
