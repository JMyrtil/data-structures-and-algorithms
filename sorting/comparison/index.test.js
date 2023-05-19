const { sortByYear, sortByTitle } = require('./index');

describe('Comparator Function Tests', () => {
  const movies = [
    { title: 'The Avengers', year: 2012 },
    { title: 'The Dark Knight', year: 2008 },
    { title: 'Inception', year: 2010 },
  ];

  describe('sortByYear', () => {
    test('should sort movies by most recent year first', () => {
      const sortedMovies = movies.sort(sortByYear);
      const expectedOrder = [
        { title: 'The Avengers', year: 2012 },
        { title: 'Inception', year: 2010 },
        { title: 'The Dark Knight', year: 2008 },
      ];
      expect(sortedMovies).toEqual(expectedOrder);
    });
  });

  describe('sortByTitle', () => {
    test('should sort movies alphabetically by title (ignoring leading articles)', () => {
      const sortedMovies = movies.sort(sortByTitle);
      const expectedOrder = [
        { title: 'The Avengers', year: 2012 },
        { title: 'Inception', year: 2010 },
        { title: 'The Dark Knight', year: 2008 },
      ];
      expect(sortedMovies).toEqual(expectedOrder);
    });
  });
});
