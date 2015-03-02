
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


var sUrl = getUrlVars()['searchvalue']; // 'cats'

document.getElementById("searchvalueveld").innerHTML = sUrl;