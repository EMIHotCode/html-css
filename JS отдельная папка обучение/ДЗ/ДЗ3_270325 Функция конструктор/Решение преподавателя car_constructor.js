'use strict';

function Car(brand, model, year, velocity) {
  // Object.assign(this,{brand,model,year,velocity}); // вместо последующих 4х строчек
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.velocity = velocity;
  this.toString = function () {
    return `Car ${this.brand} ${this.model} ${this.year}`;
  };
  this.info = function () {
    return `Автомобиль ${this.brand} модель ${this.model}, ${this.year}г выпуска имеет среднюю скорость ${this.velocity}км/ч`;
  };
  this.travelTime = function (distance) {
    const
      time = distance / this.velocity,
      rest = Math.ceil(time / 4) - 1,
      sumTime = time + rest;
    return `преодолеет ${distance}км за ${sumTime} часов (с учетом отдыха водителя ${rest} ч)`;
  };
}

class Car1 {
  constructor(brand, model, year, velocity) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.velocity = velocity;
  }

  toString() {
    return `Car ${this.brand} ${this.model} ${this.year}`;
  }

  info() {
    return `Автомобиль ${this.brand} модель ${this.model}, ${this.year}г выпуска имеет среднюю скорость ${this.velocity}км/ч`;
  }

  travelTime(distance) {
    const
      time = distance / this.velocity,
      rest = Math.ceil(time / 4) - 1,
      sumTime = time + rest;
    return `преодолеет ${distance}км за ${sumTime} часов (с учетом отдыха водителя ${rest} ч)`;
  }
}

const zaz = new Car1('Запорожец', 'ЗАЗ-964', 1960, 50);
const mers = new Car1('Mercedes-Benz', 'SLC', 2021, 150);


console.log(zaz.info());    // Автомобиль Запорожец модель ЗАЗ-964, 1960г выпуска имеет среднюю скорость 50км/ч
console.log(zaz.travelTime(1200)); // преодолеет 1200 км за 29 часов (с учетом отдыха водителя 5 ч)
console.log('' + zaz); //  Car Запорожец ЗАЗ-964 1960

console.log(mers.info());     // Автомобиль Mercedes-Benz модель SLC, 2021г выпуска имеет среднюю скорость 150км/ч
console.log(mers.travelTime(1200)); // преодолеет 1200 км за 9 часов (с учетом отдыха водителя 1 ч)
console.log('' + mers); // Car Mercedes-Benz SLC 2021 