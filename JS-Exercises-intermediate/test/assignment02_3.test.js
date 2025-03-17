import { describe, it, expect, beforeEach } from "vitest";

import Trip from '../src/model/Trip';
import { tripController } from '../src/controller/';
import { render } from '../src/view/showTrip';

describe('JS02-3 - Classes & methods', () => {
  let trips = [];

  beforeEach(() => {
    trips = [
      new Trip({
        title: 'Utrecht', image: 'domtoren.jpg', date: new Date('2005-6-18'), rating: 5, review: 'Top dag in Utrecht gehad. Hebben onder ander het Nijntje Pleintje bezocht en de Domtoren',
      }),
      new Trip({
        title: 'Amsterdam', image: 'amsterdam.png', date: new Date('2018-4-12'), rating: 3, review: 'Dagje shoppen in Amsterdam, maaar het weer viel tegen',
      }),
      new Trip({
        title: 'Veendam', image: 'langeleegte.png', date: new Date('2001-5-29'), rating: 1, review: 'Zijn de lange leegte op en neer gelopen, maar zelfs het station deed de staatnaam eer aan',
      }),
      new Trip({
        title: 'Rotterdam', image: 'erasmusbrug.jpg', date: new Date('2017-6-15'), rating: 3, review: 'Architectuur van Rotterdam bekeken, en weet nu zou er niet willen wonen',
      }),
      new Trip({
        title: 'Nederland', image: 'plaatsnaamboardje.gif', date: new Date('2002-8-12'), rating: 2, review: 'Wist niet dat Nederland ook een plaats in de Nederland is, maar ja wel een plaats met ca 3 huizen',
      }),
    ];
    tripController.reset();
  });

  describe('Testing: Trip', () => {
    it('aanmaken van een nieuw default Trip object', () => {
      const newTrip = new Trip();
      expect(newTrip).to.be.a('object');
      expect(Object.keys(newTrip).toString()).to.be.equal('title,image,date,rating,review');
      expect(newTrip.title).to.be.equal('Test');
      expect(newTrip.image).to.be.equal('test.jpg');
      expect(newTrip.rating).to.be.equal(5);
      expect(newTrip.review).to.be.equal('test');
      expect(newTrip.date).not.to.be.a('undefined');
      expect(Math.round(newTrip.date / 1000)).to.be.equal(Math.round(Date.now() / 1000));
    });

    it('aanmaken van een nieuw Trip object met date gelijk aan Date.now()', () => {
      const newTrip = new Trip({
        title: 'Utrecht', image: 'utrecht.png', date: Date.now(), rating: 4, review: 'Great city, they have Nintje',
      });
      expect(newTrip).to.be.a('object');
      expect(Object.keys(newTrip).toString()).to.be.equal('title,image,date,rating,review');
      expect(newTrip.title).to.be.equal('Utrecht');
      expect(newTrip.image).to.be.equal('utrecht.png');
      expect(newTrip.rating).to.be.equal(4);
      expect(newTrip.review).to.be.equal('Great city, they have Nintje');
    });

    it('aanmaken van een nieuw Trip object met een wat oudere datum als date', () => {
      const newTrip = new Trip({
        title: 'Utrecht', image: 'utrecht.png', date: Date('2005-6-18'), rating: 4, review: 'Great city, they have Nintje',
      });
      expect(newTrip).to.be.a('object');
      expect(Object.keys(newTrip).toString()).to.be.equal('title,image,date,rating,review');
      expect(newTrip.title).to.be.equal('Utrecht');
      expect(newTrip.image).to.be.equal('utrecht.png');
      expect(newTrip.rating).to.be.equal(4);
      expect(newTrip.review).to.be.equal('Great city, they have Nintje');
      expect(newTrip.date).to.be.equal(Date('2005-6-18'));
    });
  });

  describe('tests via de TripController', () => {
    it('Testen van de addTrip methode', () => {
      const newTrip = new Trip({
        title: 'Utrecht', image: 'utrecht.png', date: Date('2005-6-18'), rating: 4, review: 'Great city, they have Nintje',
      });
      const resultArray = tripController.addTrip(newTrip);
      expect(resultArray).to.be.a('array');
      expect(resultArray.length).to.be.equal(1);
      expect(resultArray[0] instanceof Trip);
    });

    it('test van de getTrips methode', () => {
      trips.forEach((trip) => tripController.addTrip(trip));
      const resultArray = tripController.getTrips();
      expect(resultArray).to.be.a('array');
      expect(resultArray.length).to.be.equal(trips.length);
      expect(JSON.stringify(resultArray[1])).to.be.equal(JSON.stringify(trips[1]));
    });

    it('test van de getTripsFilteredOnRating methode', () => {
      trips.forEach((trip) => tripController.addTrip(trip));
      let resultArray = tripController.getTripsFilteredOnRating(3);
      expect(resultArray.length).to.be.equal(2);
      resultArray = tripController.getTripsFilteredOnRating(4);
      expect(resultArray.length).to.be.equal(0);
      expect(tripController.getTrips().length).to.be.equal(5);
    });

    it('test van de getTripTitles methode', () => {
      trips.forEach((trip) => tripController.addTrip(trip));
      let resultArray = tripController.getTripTitels();
      expect(resultArray.length).to.be.equal(5);
      expect(resultArray.toString()).to.be.equal('Utrecht,Amsterdam,Veendam,Rotterdam,Nederland');
    });
  });

  describe('tests via de showTrip view layer', () => {
    it('Testen van de render functie', () => {
      trips.forEach((trip) => tripController.addTrip(trip));
      let resultArray = tripController.getTrips();
      expect(render(resultArray[0])).to.be.equal('<h2>Utrecht</h2><p><strong>Top dag in Utrecht gehad....</strong></p>');
      expect(render(resultArray[1])).to.be.equal('<h2>Amsterdam</h2><p><strong>Dagje shoppen in Amsterdam,...</strong></p>');
      expect(render(resultArray[2])).to.be.equal('<h2>Veendam</h2><p><strong>Zijn de lange leegte op en...</strong></p>');
      expect(render(resultArray[3])).to.be.equal('<h2>Rotterdam</h2><p><strong>Architectuur van Rotterdam...</strong></p>');
      expect(render(resultArray[4])).to.be.equal('<h2>Nederland</h2><p><strong>Wist niet dat Nederland ook...</strong></p>');
    });
  });
});
