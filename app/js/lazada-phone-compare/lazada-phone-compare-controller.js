function LazadaPhoneCompareCtrl($scope, $http) {
  function urlsHasAtLeastOne() {
    return _.some($scope.urls, function (url) {
      return url.link.length;
    });
  }

  function getUrlParams() {
    var params = [];
    _.each($scope.urls, function (url) {
      if (url.link.length && !cacheProducts.hasOwnProperty(url.link)) {
        params.push(url.link);
      }
    });

    return params;
  }

  function processData(results) {
    var availableList = [];

    _.each($scope.urls, function (url) {
      var p = _.find(results, function (r) {
        return r.link === url.link;
      });
      if (p && p.data) {
        availableList.push(p.data);
        url.isAvailable = true;
      }
      else if (cacheProducts[url.link]) {
        availableList.push(cacheProducts[url.link]);
      }

      if (p) {
        cacheProducts[url.link] = p.data;
      }
    });

    $scope.products = availableList;
  }

  var cacheProducts = {};

  $scope.isProcessing = false;

  $scope.urls = [
    {link: 'http://www.lazada.vn/apple-iphone-6-16gb-xam-hang-nhap-khau-240697.html'},
    {link: 'http://www.lazada.vn/alcatel-one-touch-991d-xam-bac-43891.html'},
    {link: 'http://www.lazada.vn/nokia-lumia-730-8gb-2-sim-den-353113.html'},
    {link: 'http://www.lazada.vn/asus-zenfone-2-32gb-den-hang-nhap-khau-1024800.html'}
  ];

  $scope.products = [];

  $scope.submit = function () {
    if (!urlsHasAtLeastOne()) {
      alert('You must enter at least 1 url');
      return;
    }

    $scope.isProcessing = true;

    var params = getUrlParams();

    //We already had cache
    if (!params.length) {
      processData([]);
      $scope.isProcessing = false;
      return;
    }

    $http.post('/api/compare', {urls: getUrlParams()})
      .success(function (results) {
        processData(results);
      })
      .error(function () {
        alert('Something wrong, please check your urls');
      })
      .finally(function () {
        $scope.isProcessing = false;
      });
  };
}

LazadaPhoneCompareCtrl.$inject = ['$scope', '$http'];

module.exports = LazadaPhoneCompareCtrl;