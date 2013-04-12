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
    './dependency'
], function(dependency) {
    console.log("running");
    dependency();
    console.log("done");
});
