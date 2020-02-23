angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$rootScope) {

//$rootScope.user = {id:13,ad:'Ali',Soyad:'Veli',yas:19};

 $rootScope.webServiceUrl = "https://www.microwebservice.net/operics_web/webservice.php" 

 $scope.create_user = function() {
        var ServiceRequest = {
            service_type: "create_user",
            telephone: $scope.newuser.telephone,
            email: $scope.newuser.email,
            password: $scope.newuser.password,
            user_type: $scope.newuser.user_type,
            name: $scope.newuser.name
        }

        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.gelendata = data
        })
    }

 $rootScope.lan = { detayButon:'Ön Başvuru Yap',geriButton:'Geri'};




  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$scope.linkURL = function(path){

  window.location.href = path;
}
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams,$rootScope) {
  $rootScope.playlists = [
    { title: 'Endüstriyel Teknolojiler ve Teknikleri Genel Değerlendirme Eğitimi',img:'img/egitim/1.jpg',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 0 },
    { title: 'Boya Teknikleri Uzmanlık Eğitimi',img:'img/egitim/2.png',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 1 },
    { title: 'Patlayıcı Ortam Eğitmi',img:'img/egitim/3.png',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 2 },
    { title: 'Indie',img:'img/egitim/2.png',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 3 },
    { title: 'Rap',img:'img/egitim/2.png',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 4 },
    { title: 'Cowbell',img:'img/egitim/2.png',sure:'20 saat',lokasyon:'Marmara Form AVM İstanbul',tarih:'12.02.2020-19.02.2020', id: 5 }
  ];

if($stateParams){
      $rootScope.detay = $rootScope.playlists[$stateParams.detayId];
}

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
