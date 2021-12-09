
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
