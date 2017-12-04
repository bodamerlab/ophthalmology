console.log ("blah?");
console.log ($('link[rel="canonical"]'));
console.log ($('link[rel="canonical"]').attr('href'));
console.log ($('link[rel="canonical"]').attr('href').match(/\//g));
console.log ($('link[rel="canonical"]').attr('href').match(/\//g).length-2);


var relative = null;
if (location.protocol==='file:') {
    var depth =  $('link[rel="canonical"]').attr('href').match(/\//g).length;
     console.log (depth);
   if (depth<=1) {
	   relative = './';
   } else {
	   relative = Array(depth).join('../'); // that's just how its done in js
   }
    console.log (relative);    
}

function to_relative(link, index) {
    if (!relative) return link;
    var hash = link ? link.match(/#.*$/) : null;
    if (hash) link = link.replace(/#.*$/, '');
    return link?(link.replace(/^\//, relative)+(index?(link.substr(-1)=='/'?'index.html':''):'')+(hash?hash[0]:'')):null;
}

$(function(){
    console.log ("is relative?");
    if (relative) {
    console.log ("is relative");
        $('a').attr('href', function(a,b){return to_relative(b, true);});
        $('img').attr('src', function(a,b){return to_relative(b, false);});
    }
});
