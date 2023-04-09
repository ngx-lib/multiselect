import 'jasmine';

import { MultiselectOption } from './models/multiselect-option.model';
import { closest, optionsGrouping, mirrorObject, virtualOptionsGroupingFlatten, findUnique, } from './utils';

const groupByProperty = 'team';

const players = [{
  "id": 1,
  "name": "Paul Pogba",
  "team": "Manchester United"
},
{
  "id": 2,
  "name": "Fred",
  "team": "Manchester United"
},
{
  "id": 3,
  "name": "Eden Hazard",
  "team": "Chelsea FC"
},
{
  "id": 4,
  "name": "Jorginho",
  "team": "Chelsea FC"
},
{
  "id": 5,
  "name": "Leonel Messi",
  "team": "FC Barcelona"
}];

describe('MultiselectService', () => {

  it('should be find out closest element when element tag have been passed to it',
    () => {
      // arrange
      const div = document.createElement('div');
      div.classList.add('grand-parent');
      div.innerHTML = `<div class="parent">
        <div class="child">
          <div class="grand-child">Some Text</div>
        </div>
      </div>`;

      // act
      const grandChild = div.querySelector('.grand-child') as HTMLElement;
      const closestEl = closest(grandChild, '.grand-parent');

      // assert
      expect(closestEl).toBeTruthy();
    }
  );

  it('should not return closest element', () => {
    // arrange
    // act
    const closestEl = closest(null, '.grand-parent');

    // assert
    expect(closestEl).toBeFalsy();
  });

  it('should be mirror the object', () => {
    // arrange
    const obj = { id: 'Team', name: 'TeamName' };
    const keys = Object.keys(obj);
    const values = Object.keys(obj).map(function (e) {
      return obj[e]
    })


    // act
    const reverse = mirrorObject(obj);

    // assert
    expect(reverse[values[0]]).toBeDefined();
    expect(reverse[values[0]]).toBe(keys[0]);
    expect(reverse[values[1]]).toBeDefined();
    expect(reverse[values[1]]).toBe(keys[1]);
  });

  describe('optionsGrouping', () => {
    it('should group by pass group property', () => {
      // arrange
      // act
      const groupedResults = optionsGrouping(players, groupByProperty);

      // assert
      expect(groupedResults.length).toBe(3);
      expect(groupedResults[0].values.length).toBe(2);
      expect(groupedResults[1].values.length).toBe(2);
      expect(groupedResults[2].values.length).toBe(1);
    });

    it('should mark group option when all descendants are seleceted', () => {
      // arrange
      const plyrs = JSON.parse(JSON.stringify(players)) as MultiselectOption[];
      plyrs.forEach(p => p['team'] === 'Manchester United' && (p['ticked'] = true));

      // act
      const groupedResults = optionsGrouping(plyrs, groupByProperty);

      // assert
      expect(groupedResults[0]['ticked']).toBeTruthy();
    });

    it('should un mark group option when any of descendant is deselected', () => {
      // arrange
      const plyrs = JSON.parse(JSON.stringify(players))

      // act
      const groupedResults = optionsGrouping(plyrs, groupByProperty);

      // assert
      expect(groupedResults[0]['ticked']).toBeFalsy();
    });
  });

  it('should find unique numbers', () => {
    // arrange
    const plyrs = JSON.parse(JSON.stringify(players));

    // act
    const groupedOptions = virtualOptionsGroupingFlatten(plyrs, groupByProperty);

    // assert
    expect(groupedOptions.length).toBe(8);
  });

  it('should flatten virtual group options', () => {
    // arrange
    const plyrs = [1, 2, 1, 2, 3]

    // act
    const unique = findUnique(plyrs);

    // assert
    expect(unique.length).toBe(3);
    expect(unique.toString()).toBe('1,2,3');
  });

  it('should disabled group button if all descendant disabled', () => {
    // arrange
    const plyrs = JSON.parse(JSON.stringify(players))
    plyrs.forEach(p => p.team === 'Manchester United' && (p.disabled = true));

    // act
    const groupingOptions = virtualOptionsGroupingFlatten(plyrs, groupByProperty);

    // assert
    expect(groupingOptions.length).toBe(8);
    expect(groupingOptions[0].disabled).toBeTruthy();
  });

  it('should flatten virtual group options', () => {
    // arrange
    const plyrs = [1, 2, 1, 2, 3];

    // act
    const unique = findUnique(plyrs);

    // assert
    expect(unique.length).toBe(3);
    expect(unique.toString()).toBe('1,2,3');
  });
});
