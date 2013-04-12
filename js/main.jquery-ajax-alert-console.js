(function(){
    "use strict";
    console.log("initializing require.js");

    require.config({
        paths: {
            jquery: '../libs/jquery',
            underscore: '../libs/underscore',
            Handlebars: '../libs/Handlebars',
            require: '../libs',
            hbs: '../libs/hbs',
        },
        hbs: {
            disableI18n: true
        }
    });

    require([
        'jquery',
        './dependency'
    ], function(jQuery, dependency) {
        alert("some timing issue maybe?");
        console.log("running");

        jQuery.ajax({ 
            url: location.href.replace(/\/[^\/]+$/, "/foo.css"),
            method: "GET", 
            dataType: 'text' 
        })
        .always(function(a, b, c){ console.log("AJAX:", a, b, c) });

        dependency();
        console.log("done");
    });
})();