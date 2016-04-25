angular
  .module('nutsApp')
  .controller('reviewsCtrl', reviewsCtrl);


function reviewsCtrl () {
    if(location.search.indexOf('reloaded=yes') < 0){
        var hash = window.location.hash;
        var loc = window.location.href.replace(hash, '');
        loc += (loc.indexOf('?') < 0? '?' : '&') + 'reloaded=yes';
        // SET THE ONE TIME AUTOMATIC PAGE RELOAD TIME TO 5000 MILISECONDS (5 SECONDS):
        setTimeout(function(){window.location.href = loc + hash;}, 500);
    }
}