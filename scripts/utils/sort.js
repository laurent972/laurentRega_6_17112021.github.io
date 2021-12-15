
//Tri par likes
function byLikes(item1,item2){
    if(item1.likes <item2.likes){
        return 1;
    }else if(item2.likes<item1.likes){
        return -1;
    }else{
        return 0;
    }
}

//Tri par Titre
function byTitles(item1,item2){
    if(item1.title >item2.title){
        return 1;
    }else if(item2.title>item1.title){
        return -1;
    }else{
        return 0;
    }
} 

//Fonction de tri affichage
async function tri(){
    const filterLike = document.querySelector('.like');
    const filterTitles = document.querySelector('.title');
    const filterBase = document.querySelector('.base');
    const linkSortLikes  = `photographer.html?id=${_id}&sortByLikes`;
    const linkSortTitles  = `photographer.html?id=${_id}&sortByTitles`;
    const linkSort  = `photographer.html?id=${_id}`;

    filterLike.addEventListener('click', (e)=>{ 
        location.href = linkSortLikes;       
    });
    filterLike.addEventListener('keypress', (e)=>{ 
      location.href = linkSortLikes;       
  });

    filterTitles.addEventListener('click', (e)=>{ 
        location.href = linkSortTitles;       
    });
    filterTitles.addEventListener('keypress', (e)=>{ 
      location.href = linkSortTitles;       
  });

    filterBase.addEventListener('click', (e)=>{ 
        location.href = linkSort;       
    });
    filterBase.addEventListener('keypress', (e)=>{ 
      location.href = linkSort;       
  });
}