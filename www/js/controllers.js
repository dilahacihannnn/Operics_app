angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $ionicModal, $http, $ionicPopup) {

    localStorage.setItem('language', "TR");

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php"
    

    $scope.cikis = function()  {
        $scope.userId = 0;
        localStorage.removeItem('user_id');
        localStorage.removeItem('language');

        if ($scope.userId == 0) 
            { 
            $ionicModal.fromTemplateUrl('templates/login.html', {scope: $scope}).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        }
        
        if ($scope.userId != 0)
        {   
            $ionicModal.fromTemplateUrl('templates/login.html', {scope: $scope}).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.hide();
            });
        }
        
    }

    $scope.loginData = {}; 

    // Create the login modal that we will use later

    

    $scope.doLogin = function() {
    // post edilecek ServiceRequest isimli değişken tanımlanır,
        var ServiceRequest = {
            service_type: "giris",
            email: $scope.loginData.email,
            sifre: $scope.loginData.password
        }
    // Service request değişkeni web service post edilir. Gelen yanıt $scope.giris isimli değişkene atanır.
        $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
            $scope.giris = data[0]

    //Gelen veriler girlenler ile uyuşuyorsa kullanıcı ismi ve maili lokale kaydedilir.
        if ($scope.giris.login_status!= false) {

            localStorage.setItem('user_id', $scope.giris.id);

            // Kaydedilen bilgiler uygulamanın ilgili kısımlarında gösterilmek üzere kullanılır.

            $scope.userId = localStorage.getItem('user_id');

            $ionicPopup.alert ("Sn. " + $scope.profile[$scope.user_id].USER_NAME + ", Operics'e hoşgeldiniz!..");
            

        } else {

            alert ("Hatalı kullanıcı maili veya şifre kullandınız. Lütfen tekrar deneyiniz!..");

        };
                
            
        })
    };



    $scope.kayitData = {};

    $scope.registerUser = function() {

        var ServiceRequest = {
            service_type: "create_user",
            name:     $scope.kayitData.name,
            sifre:    $scope.kayitData.password,
            email:    $scope.kayitData.email,
            phone:    $scope.kayitData.number,
            photo: "img/pp.jfif",
            user_type: "genel",
            company:  $scope.kayitData.company,
            position: $scope.kayitData.position
        }
        // Service request değişkeni web service post edilir. Gelen yanıt $scope.kullanici isimli değişkene atanır.
        $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
            $scope.kullanici = data
        })
    };

    var ServiceRequest = {
        service_type: "hikayeler",
        language: localStorage.getItem('language')
    }
        // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
        $scope.hikayeler = data
    })

    var ServiceRequest = {
      service_type: "hizmetler",
      language: localStorage.getItem('language')
    }
    // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
      $scope.hizmetler = data
    })

    var ServiceRequest = {
        service_type: "ekip",
        language: localStorage.getItem('language')
    }
    // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.ekip = data
    })

    var ServiceRequest = {
        service_type: "referanslar",
        language: localStorage.getItem('language')
    }
        // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
        $scope.referanslar = data
    })

    var ServiceRequest = {
        service_type: "egitimler",
        language: localStorage.getItem('language')
    }
        // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
        $scope.egitimler = data
    })

    var ServiceRequest = {
        service_type: "sozluk",
        language: localStorage.getItem('language')
    }
    // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data
    })

    var ServiceRequest = {
        service_type: "profil",
        language: localStorage.getItem('language'),
        userId: $scope.user_id
    }
    // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.profil = data
    })



    $scope.abouttab = 0;

    $scope.tiklaab=function() {
        console.log($scope.abouttab);
    };

    $scope.modalgosterici = function(tur, id){
      $scope.itemId = id;

      switch(tur){

        case 'service':
          $ionicModal.fromTemplateUrl('templates/service-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        break;

        case 'course':
          $ionicModal.fromTemplateUrl('templates/course-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
          })
        break;

        case 'story':
          $ionicModal.fromTemplateUrl('templates/story-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        break;

        case 'profile':
          $ionicModal.fromTemplateUrl('templates/profile-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        break;

        case 'team':
          $ionicModal.fromTemplateUrl('templates/team-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        break;

        case 'dictionary':
          $ionicModal.fromTemplateUrl('templates/dictionary-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
        break;
      }

    };

    // Onay kutusu
    $scope.ConfirmApplication = function() {
        var confirmPopup = $ionicPopup.alert({
            title: "Başarılı",
            template: "Sn. Ahmet Yılmaz “Endüstriyel Tasarımlar ve Teknikler Eğitimi için ön başvurunuz alınmıuştır. En kısa sürede sizinle iritibata geçilecektir."
        });

        confirmPopup.then(function(res) {
            if (res) {
                $scope.aktifmi = true;
                var ServiceRequest = {
                  service_type: "kursa_katil",
                  user_id:"3",
                  course_id:"2"
                }

                $http.post($rootScope.webServiceUrl, ServiceRequest)
            }
        });
    };

    // A confirm dialog
    $scope.CancelApplication = function() {
        var confirmPopup = $ionicPopup.alert({
            title: "İptal Edildi",
            template: "İptal onaylanmıştır."
        });

        confirmPopup.then(function(res) {
            if (res) {
                $scope.aktifmi = false;
                var ServiceRequest = {
                  service_type: "kursu_iptal_et",
                  user_id:"3",
                  course_id:"2"
                }

                $http.post($rootScope.webServiceUrl, ServiceRequest)
            }
        });
    };

});




