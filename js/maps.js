let lockedIds = "";

function lockMap(loc){
    if(lockedIds != loc){
        let prevLoc = lockedIds
        lockedIds = loc
        if(prevLoc != ""){
            hideMap(prevLoc)
        }

        showMap(loc)
    }else{
        lockedIds = ""
        hideMap(loc)
    }
}
function showMap(loc){
    document.getElementById(loc).style.visibility = 'visible';
}
function hideMap(loc) {
    if(lockedIds != loc){
        document.getElementById(loc).style.visibility = 'hidden';
    }
}