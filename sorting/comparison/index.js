function sortByYear(movies) {
  movies.sort((a, b) => b.year - a.year);
  return movies;
}

function sortByTitle(movies) {
  movies.sort((a, b) => {
    const titleA = a.title.replace(/^(A|An|The)\s+/i, '');
    const titleB = b.title.replace(/^(A|An|The)\s+/i, '');
    return titleA.localeCompare(titleB);
  });
  return movies;
}

module.exports = { sortByYear, sortByTitle };
