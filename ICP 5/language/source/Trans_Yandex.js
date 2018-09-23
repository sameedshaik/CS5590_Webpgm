var app=angular.module("YdXTranslate",[]);
app.controller("YdXTranslatecontroller",function ($scope,$http) {
    $scope.translate = function () {
        var fromlang = document.getElementById('inputlang').value;
        var word = document.getElementById('phrase').value;
        var language = document.getElementById('lang').value;
        $http.get('https://translate.yandex.naet/pi/v1.5/tr.json/translate?key=trnsl.1.1.20170911T180133Z.54a4578d96adf730.7837f987d265df0b1d6901bd1c716007498e5bd9&lang=' + fromlang + '-' + language + '&text=' + word).success(function (data) {
            //'https://translate.yandex.com/?lang=' + fromlang + '-' + language + '&text=' + word

            //https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170911T180133Z.54a4578d96adf730.7837f987d265df0b1d6901bd1c716007498e5bd9&text=' + word + '&lang=' + language
            console.log(data);
            $scope.output = data.text;
        })
    }















    function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

    $(function() {
        $("form").on("submit", function(e) {
            e.preventDefault();
            // prepare the request
            var request = gapi.client.youtube.search.list({

                q: encodeURIComponent($("#phrase").val()).replace(/%20/g, "+"),

            });
            // execute the request
            request.execute(function(response) {
                var results = response.result;
                $("#results").html("");

            });
        });


    });

    function resetVideoHeight() {
        $(".video").css("height", $("#results").width() * 9/16);
    }

    function init() {
        gapi.client.setApiKey("AIzaSyAMqDRbUMC3AtgWrl7CUFbUsXc8lhVmfTc");
        gapi.client.load("youtube", "v3", function() {
            // yt api is ready
        });
    }


})