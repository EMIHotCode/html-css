function Car(manufacturer, model, yearOfManufact,averageSpeed) {
   this.manufacturer = manufacturer;
   this.model = model;
   this.yearOfManufact = yearOfManufact;
   this.averageSpeed = averageSpeed;
   
   this.info = function (){
      return `Автомобиль ${this.manufacturer} модель ${this.model}, ${this.yearOfManufact}г выпуска имеет среднюю скорость ${this.averageSpeed}км/ч`;
   };

   this.travelTime = function (distance) {
      let timeInWay = distance/averageSpeed;
      
      let timeInRest = timeInWay/4;
      if (timeInWay/4 !== 0){
         timeInRest -= 1;
      }

      let timeTotal = distance/averageSpeed + timeInRest;
      return `преодолеет ${distance} км за ${timeTotal} часов (с учетом отдыха водителя ${timeInRest} ч)`
   };

   this.toString = function (){
      return `Car ${this.manufacturer} ${this.model} ${this.yearOfManufact} `;
   };
}

class Car1 {
   constructor(manufacturer, model, yearOfManufact, averageSpeed) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.yearOfManufact = yearOfManufact;
      this.averageSpeed = averageSpeed;
   }
      info() {
         return `Автомобиль ${this.manufacturer} модель ${this.model}, ${this.yearOfManufact}г выпуска имеет среднюю скорость ${this.averageSpeed}км/ч`;
      }
   
      travelTime(distance) {
         let timeInWay = distance/this.averageSpeed,         
               timeInRest = timeInWay/4;

         if (timeInWay/4 !== 0){
            timeInRest -= 1;
         }
   
         let timeTotal = distance/this.averageSpeed + timeInRest;
         return `преодолеет ${distance} км за ${timeTotal} часов (с учетом отдыха водителя ${timeInRest} ч)`
      }
   
      toString() {
         return `Car ${this.manufacturer} ${this.model} ${this.yearOfManufact} `;
      }
 }


const zaz = new Car('Запорожец', 'ЗАЗ-964', 1960, 50);
const mers = new Car('Mercedes-Benz', 'SLC', 2021, 150);


console.log(zaz.info());// Автомобиль Запорожец модель ЗАЗ-964, 1960г выпуска имеет среднюю скорость 50км/ч
console.log(zaz.travelTime(1200)); // преодолеет 1200 км за 29 часов (с учетом отдыха водителя 5 ч)
console.log(''+zaz); //  Car Запорожец ЗАЗ-964 1960

console.log(mers.info()); // Автомобиль Mercedes-Benz модель SLC, 2021г выпуска имеет среднюю скорость 150км/ч
console.log(mers.travelTime(1200)); // преодолеет 1200 км за 9 часов (с учетом отдыха водителя 1 ч) 
console.log(''+mers); // Car Mercedes-Benz SLC 2021 

const zaz1 = new Car1('Запорожец', 'ЗАЗ-964', 1960, 50);
const mers1 = new Car1('Mercedes-Benz', 'SLC', 2021, 150);

console.log('\n\n\n'+zaz1.info());// Автомобиль Запорожец модель ЗАЗ-964, 1960г выпуска имеет среднюю скорость 50км/ч
console.log(zaz1.travelTime(1200)); // преодолеет 1200 км за 29 часов (с учетом отдыха водителя 5 ч)
console.log(''+zaz1); //  Car Запорожец ЗАЗ-964 1960

console.log(mers1.info()); // Автомобиль Mercedes-Benz модель SLC, 2021г выпуска имеет среднюю скорость 150км/ч
console.log(mers1.travelTime(1200)); // преодолеет 1200 км за 9 часов (с учетом отдыха водителя 1 ч) 
console.log(''+mers1); // Car Mercedes-Benz SLC 2021 