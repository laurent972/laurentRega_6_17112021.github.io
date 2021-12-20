/* eslint-disable no-restricted-globals */
// Tri par likes
// eslint-disable-next-line no-unused-vars
function byLikes(item1, item2) {
  if (item1.likes < item2.likes) {
    return 1;
  } if (item2.likes < item1.likes) {
    return -1;
  }
  return 0;
}

// Tri par Titre
// eslint-disable-next-line no-unused-vars
function byTitles(item1, item2) {
  if (item1.title > item2.title) {
    return 1;
  } if (item2.title > item1.title) {
    return -1;
  }
  return 0;
}

// Fonction de tri affichage
// eslint-disable-next-line no-unused-vars
async function tri() {
  const filterLike = document.querySelector('.like');
  const filterTitles = document.querySelector('.title');
  const filterBase = document.querySelector('.base');
  // eslint-disable-next-line no-undef
  const linkSortLikes = `photographer.html?id=${id}&sortByLikes`;
  // eslint-disable-next-line no-undef
  const linkSortTitles = `photographer.html?id=${id}&sortByTitles`;
  // eslint-disable-next-line no-undef
  const linkSort = `photographer.html?id=${id}`;

  filterLike.addEventListener('click', () => {
    location.href = linkSortLikes;
  });
  filterLike.addEventListener('keypress', () => {
    location.href = linkSortLikes;
  });

  filterTitles.addEventListener('click', () => {
    location.href = linkSortTitles;
  });
  filterTitles.addEventListener('keypress', () => {
    location.href = linkSortTitles;
  });

  filterBase.addEventListener('click', () => {
    location.href = linkSort;
  });
  filterBase.addEventListener('keypress', () => {
    location.href = linkSort;
  });
}
