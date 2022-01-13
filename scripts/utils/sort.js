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

function byDate(item1, item2) {
  const dat1 = parseInt(item1.date,10);
  const dat2 = parseInt(item2.date,10);

  if (dat1 > dat2) {
    return 1;
  } if (dat2 > dat1) {
    return -1;
  }
  return 0;
}


// Fonction de tri affichage
// eslint-disable-next-line no-unused-vars
async function clickDate() {
  const linkSort = `photographer.html?id=${id}&sortByDate`;
  window.location.href = linkSort;
}

async function clickLikes() {
  const linkSortLikes = `photographer.html?id=${id}&sortByLikes`;
  window.location.href = linkSortLikes;
}

async function clickTitre() {
  const linkSortTitles = `photographer.html?id=${id}&sortByTitles`;
  window.location.href = linkSortTitles;
}