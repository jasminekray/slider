app.controller('sliderCtrl', sliderCtrl);

function sliderCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.slides = [
        {
            pos: 1,
            src: './img/slide-one.png',
            desc: ''
        },
        {
            pos: 2,
            src: './img/slide-two.png',
            desc: ''
        },
        {
            pos: 3,
            src: './img/slide-three.png',
            desc: ''
        },
        {
            pos: 4,
            src: './img/slide-four.png',
            desc: ''
        }
    ];
}