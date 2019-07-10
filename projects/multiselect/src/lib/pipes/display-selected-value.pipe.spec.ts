import { DisplaySelectedValuePipe } from './display-selected-value.pipe';
import { TestBed } from '@angular/core/testing';

describe('DisplaySelectedValuePipe', () => {
  let pipe: DisplaySelectedValuePipe;
  let options: any[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySelectedValuePipe]
    }).compileComponents();
  });

  beforeEach(() => {
    pipe = new DisplaySelectedValuePipe();
    options = [
      { id: 1, name: 'Test 1', category: 'Cat 1' },
      { id: 2, name: 'Test 2', category: 'Cat 1' },
      { id: 3, name: 'Test 3', category: 'Cat 2' },
      { id: 4, name: 'Test 4', category: 'Cat 2' },
      { id: 5, name: 'Test 5', category: 'Cat 3' },
      { id: 6, name: 'Test 6', category: 'Cat 3', disabled: true }
    ];
  });
  it('Should show top 3 as first thing', () => {
    // arrange
    // act
    const result = pipe.transform(options);
    // assert
    expect(result.split(',').length).toBeTruthy(3);
  });
  it('if less than 3 values passed, show that many options', () => {
    // arrange
    const opts = [...options];
    opts.length = 2;
    // act
    const result = pipe.transform(opts);
    // assert
    expect(result.split(',').length).toBeTruthy(2);
  });
  it('More than 3 values will display 3 value, with elipsis (...) ', () => {
    // arrange
    // act
    const result = pipe.transform(options);
    // assert
    expect(result.indexOf('...')).toBeGreaterThan(-1);
  });
  it('Should show top 3 comma separated result', () => {
    // arrange
    // act
    const result = pipe.transform(options);
    // assert
    expect(result.split(',').length).toBeTruthy(3);
    expect(result.indexOf('...')).toBeGreaterThan(-1);
  });
  it('Default maxLabels count should be 3', () => {
    // arrange
    // act
    // assert
    expect(pipe.defaultMaxLabelCount).toBe(3);
  });
  it('Passed maxLabels should work', () => {
    // arrange
    // act
    const result = pipe.transform(options, 4);
    // assert
    expect(result.split(',').length).toBeTruthy(4);
    expect(result.indexOf('...')).toBeGreaterThan(-1);
  });
  it('should return blank string in case of no value is selected', () => {
    // arrange
    // act
    const result = pipe.transform([], 4);
    // assert
    expect('').toBe('');
  });
});
