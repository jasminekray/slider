app 
    .directive('sliderDir', function() {
        return {
            restrict: 'E',
            templateUrl: './slider.html',
            scope: {
                img: '=',
                interval: '&'
            },
            link: function() {

            }
        }
    })