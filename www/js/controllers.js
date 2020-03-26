angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $ionicModal, $http, $ionicPopup) {

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php";
    $scope.pictureUrl = "http://placehold.it/200x200";

    //Girişte sorgulanacak parametreler
    $scope.loginData                = {};
    $scope.kayitData                = {};
    $scope.userId                   = localStorage.getItem('user_id');
    $scope.language                 = localStorage.getItem('language');
    $scope.diller                   = JSON.parse(localStorage.getItem('dillerJson'));
    $scope.hikayeler                = JSON.parse(localStorage.getItem('hikayeJson'));
    $scope.hizmetler                = JSON.parse(localStorage.getItem('hizmetJson'));
    $scope.ekip                     = JSON.parse(localStorage.getItem('ekipJson'));
    $scope.referanslar              = JSON.parse(localStorage.getItem('referansJson'));
    $scope.sozluk                   = JSON.parse(localStorage.getItem('sozlukJson'));
    $scope.profil                   = JSON.parse(localStorage.getItem('profilJson'));
    $scope.dillerVersionChck        = true;
    $scope.hikayelerVersionChck     = true;
    $scope.hizmetlerVersionChck     = true;
    $scope.ekipVersionChck          = true;
    $scope.referanslarVersionChck   = true;
    $scope.sozlukVersionChck        = true;
    $scope.profilVersionChck        = true;

    if (!$scope.language) {
        localStorage.setItem('language', "TR");
        $scope.language = localStorage.getItem('language');
    };


    //Logout işlemi

    $scope.cikis = function()  {
        localStorage.removeItem('language');
        localStorage.removeItem('user_id');
        $scope.userId = localStorage.getItem('user_id')
    }

    //Login ve Kayıt işlemleri

    if (!$scope.userId) {

        $ionicModal.fromTemplateUrl('templates/login.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });

        $scope.tiklabayrak=function(language) {
            localStorage.setItem('language', language);
            console.log(language);
        };

        $scope.doLogin = function() {
        // post edilecek ServiceRequest isimli değişken tanımlanır,
            var ServiceRequest = {
                service_type: "giris",
                email: $scope.loginData.email,
                sifre: $scope.loginData.password,
                }
        // Service request değişkeni web service post edilir. Gelen yanıt $scope.giris isimli değişkene atanır.
            $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
            $scope.giris = data[0]

        //Gelen veriler girlenler ile uyuşuyorsa kullanıcı ismi ve maili lokale kaydedilir.
            if ($scope.giris.login_status!= false) {

                localStorage.setItem('user_id', $scope.giris.id);

        // Kaydedilen bilgiler uygulamanın ilgili kısımlarında gösterilmek üzere kullanılır.

                $scope.userId = localStorage.getItem('user_id');

                $ionicPopup.alert ({template: "Sn. " + $scope.giris.user_name + ", Operics'e hoşgeldiniz!.."});

                $scope.modal.hide();
                console.log("buraya girdi");

            } else {

                $ionicPopup.alert ({template:"Hatalı kullanıcı maili veya şifre kullandınız. Lütfen tekrar deneyiniz!.."});

            };

            })
        };
        $scope.kayitButon = function (kayittab) {
            $scope.kayittab = kayittab;
            console.log ($scope.kayittab);
        }
        // Kullanıcı kayıt servisi
        $scope.registerUser = function() {

            var ServiceRequest = {
                service_type: "create_user",
                photo:    "img/pp.jfif",
                name:     $scope.kayitData.name,
                phone:    $scope.kayitData.number,
                email:    $scope.kayitData.email,
                sifre:    $scope.kayitData.password,
                company:  $scope.kayitData.company,
                position: $scope.kayitData.position
            }
        // Service request değişkeni web service post edilir. Gelen yanıt $scope.kullanici isimli değişkene atanır.
            $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
                $scope.kullanici = data
            })
        };

    } else {
        $ionicModal.fromTemplateUrl('templates/login.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.hide();
        });

    }

    // Profil resmi için kamera kontrolcüsü

    $scope.takePP = function() {
        var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG
        }
        $cordovaCamera.getPicture({})
            .then(function(imageData) {
                console.log('camera data: ' + angular.toJson(imageData));
                $scope.pictureUrl = 'data:image/jpeg;base64,' + imageData;
            }, function(error) {
                console.log('camera error: ' + angular.toJson(imageData))
            })
    };

    // Çağrılacak servisler:

   
    if (!$scope.diller) {

        var ServiceRequest = {
            service_type: "diller",
            language: localStorage.getItem('language')
        }

        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('dillerJson', JSON.stringify(data));
            $scope.diller = JSON.parse(localStorage.getItem('dillerJson')); 
        })
    }   

    if (!$scope.hikayeler) {
        var ServiceRequest = {
            service_type: "hikayeler",
            language: localStorage.getItem('language')
        }
            // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('hikayeJson', JSON.stringify(data));
            $scope.hikayeler = JSON.parse(localStorage.getItem('hikayeJson'));
        })
    } 

    if (!$scope.hizmetler) {
        var ServiceRequest = {
          service_type: "hizmetler",
          language: localStorage.getItem('language')
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('hizmetJson', JSON.stringify(data));
            $scope.hizmetler = JSON.parse(localStorage.getItem('hizmetJson'));
        })
    } 

    if (!$scope.ekip) {
        var ServiceRequest = {
            service_type: "ekip",
            language: localStorage.getItem('language')
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('ekipJson', JSON.stringify(data));
            $scope.ekip = JSON.parse(localStorage.getItem('ekipJson'));
        })
    }

    if (!$scope.referanslar) {
        var ServiceRequest = {
            service_type: "referanslar",
            language: localStorage.getItem('language')
        }
            // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('referansJson', JSON.stringify(data));
            $scope.referanslar = JSON.parse(localStorage.getItem('referansJson'));
        })
    }

    if (!$scope.egitimler) {
        var ServiceRequest = {
            service_type: "egitimler",
            language: localStorage.getItem('language')
        }
            // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('egitimJson', JSON.stringify(data));
            $scope.egitimler = JSON.parse(localStorage.getItem('egitimJson'));
        })
    }

    if (!$scope.sozluk) {
        var ServiceRequest = {
            service_type: "sozluk",
            language: localStorage.getItem('language')
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('sozlukJson', JSON.stringify(data));
            $scope.sozluk = JSON.parse(localStorage.getItem('sozlukJson'));
        })
    }

    if (!$scope.profil) {
        var ServiceRequest = {
            service_type: "profil",
            language: localStorage.getItem('language'),
            userId: $scope.user_id
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            localStorage.setItem('profilJson', JSON.stringify(data));
            $scope.profil = JSON.parse(localStorage.getItem('profilJson'));
        })
    }


    $scope.tiklaab=function(abouttab) {
        console.log(abouttab);
        $scope.abouttab = abouttab;
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

     $scope.text_truncate = function(str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }

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
