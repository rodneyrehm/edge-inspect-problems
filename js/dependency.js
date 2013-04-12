define([
    'hbs!template'
    ], function(tpl) {
        
    "use strict";
    return function() {
        document.body.innerHTML = tpl();
        document.body.className = 'loaded';
    };
});