
$(document).ready(function () {
    /*
    function windowSizeIncrease() {
        var windowSize = window.innerWidth;
        if (windowSize >= 1200) {
            $(".sidebar").stick_in_parent();
        }
    }

    windowSizeIncrease();

    $(window).resize(windowSizeDecrease);*/
    $(".sidebar").stick_in_parent();



});

//----------
// Models
//----------

var app = {};

app.Stock = Backbone.Model.extend({
    defaults: {
        type: "Акция",
        title: "",
        name: "",
        image: "",
        description: ""
    }
});

//----------
// Collection
//----------

app.PostList = Backbone.Collection.extend({
    model: app.Stock,
    url: 'https://radiant-taiga-58366.herokuapp.com'
});

app.postList = new app.PostList();
