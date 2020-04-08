angular.module('starter.controllers', [])

  .controller('MainCtrl', function ($scope, $state, $rootScope, $stateParams, $ionicModal, $http, $ionicPopup) {

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php";
    $scope.pictureUrl = "http://placehold.it/200x200";



    $scope.userlist = [
    {"id":"0","isim":"Anıl Solmaz","telefon":"0123456789","mail":"anil@mail","sirket":"operics","status":"active","imgURL":"https://icon-library.net/images/username-icon/username-icon-28.jpg"},
    {"id":"1","isim":"Nur Taşkara","telefon":"0123456789","mail":"nur@mail","sirket":"operics","status":"banned","imgURL":"https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg"}
    ]

    $scope.aboutus_ekle = function(tab_no) {

      if (!tab_no) {
          $ionicModal.fromTemplateUrl('templates/add-service.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
      } else {

        switch (tab_no) {

          case 0:
            $ionicModal.fromTemplateUrl('templates/add-service.html', { scope: $scope }).then(function (modal) {
              $scope.modal = modal;
              $scope.modal.show();
            });
          break;

           case 1:
            $ionicModal.fromTemplateUrl('templates/add-reference.html', { scope: $scope }).then(function (modal) {
              $scope.modal = modal;
              $scope.modal.show();
            });
          break;

           case 2:
            $ionicModal.fromTemplateUrl('templates/add-team.html', { scope: $scope }).then(function (modal) {
              $scope.modal = modal;
              $scope.modal.show();
            });
          break;
        }
      }  
    }

    //Girişte sorgulanacak parametreler
    $scope.loginData                    = {};
    $scope.kayitData                    = {};
    $scope.smsVerify                    = {};
    $scope.language                     = localStorage.getItem('language');
    $scope.userId                       = localStorage.getItem('user_id');
    $scope.loginStatus                  = localStorage.getItem('loginStatus');
    $scope.languageOld                  = localStorage.getItem('languageOld');
    $scope.diller                       = JSON.parse(localStorage.getItem('dillerJson'));
    $scope.hikayeler                    = JSON.parse(localStorage.getItem('hikayeJson'));
    $scope.hizmetler                    = JSON.parse(localStorage.getItem('hizmetJson'));
    $scope.ekip                         = JSON.parse(localStorage.getItem('ekipJson'));
    $scope.referanslar                  = JSON.parse(localStorage.getItem('referansJson'));
    $scope.egitimler                    = JSON.parse(localStorage.getItem('egitimJson'));
    $scope.sozluk                       = JSON.parse(localStorage.getItem('sozlukJson'));
    $scope.profil                       = JSON.parse(localStorage.getItem('profilJson'));

    //Login Durum Kontrol düzeltme

    $scope.loadData = function (){
    
      if ($scope.loginStatus == 0) {

        $state.go('login');

      } else {

        // Çağrılacak servisler:

        if ((!$scope.hikayeler || $scope.hikayelerVersionChck == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "hikayeler",
            language: localStorage.getItem('language')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('hikayeJson', JSON.stringify(data));
            $scope.hikayeler = JSON.parse(localStorage.getItem('hikayeJson'));
          })
        }

        if ((!$scope.hizmetler || $scope.hizmetlerVersionChck == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "hizmetler",
            language: localStorage.getItem('language')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('hizmetJson', JSON.stringify(data));
            $scope.hizmetler = JSON.parse(localStorage.getItem('hizmetJson'));
          })
        }

        if ((!$scope.ekip || $scope.ekipVersionChck == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "ekip",
            language: localStorage.getItem('language')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('ekipJson', JSON.stringify(data));
            $scope.ekip = JSON.parse(localStorage.getItem('ekipJson'));
          })
        }

        if ((!$scope.referanslar || $scope.referanslarVersionChck == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "referanslar",
            language: localStorage.getItem('language')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('referansJson', JSON.stringify(data));
            $scope.referanslar = JSON.parse(localStorage.getItem('referansJson'));
          })
        }

        if ((!$scope.egitimler || $scope.egitimVersionChckk == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "egitimler",
            language: localStorage.getItem('language')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('egitimJson', JSON.stringify(data));
            $scope.egitimler = JSON.parse(localStorage.getItem('egitimJson'));
          })
        }


        if ((!$scope.sozluk || $scope.sozlukVersionChck == false) && $scope.loginStatus == 1) {
          var ServiceRequest = {
            service_type: "sozluk",
            user_id: localStorage.getItem('user_id')
          }

          // Yeni user isteği post edilir ve veritabanına eklenir.
          $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
            localStorage.setItem('sozlukJson', JSON.stringify(data));
            $scope.sozluk = JSON.parse(localStorage.getItem('sozlukJson'));
          })
        }

        
        /*if ((!$scope.profil || $scope.profilVersionChck == false) && $scope.loginStatus == 1) {
            var ServiceRequest = {
                service_type: "profil",
                language: localStorage.getItem('language'),
                userId: $scope.userId
            }

            // Yeni user isteği post edilir ve veritabanına eklenir.
            $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
                localStorage.setItem('profilJson', JSON.stringify(data));
                $scope.profil = JSON.parse(localStorage.getItem('profilJson'));
            })
        } 
        */ 

        $state.go('tab.main'); 
        
      }
    }
    
    if (!$scope.loginStatus) {
      localStorage.setItem('loginStatus', 0);
      $scope.loginStatus = localStorage.getItem('loginStatus');
      $scope.loadData();
    }


    //Version Kontrolü
    var ServiceRequest = {
      service_type: "versionChck"
    }

    // Service request değişkeni web service post edilir. Gelen yanıt $scope.giris isimli değişkene atanır.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
      $scope.dillerVersionChck        = data
      $scope.hikayelerVersionChck     = data
      $scope.hizmetlerVersionChck     = data
      $scope.referanslarVersionChck   = data
      $scope.ekipVersionChck          = data
      $scope.egitimVersionChck        = data
      $scope.sozlukVersionChck        = data
      $scope.profilVersionChck        = data
    })

    if (!$scope.language || !$scope.diller || $scope.dillerVersionChck == false) {
      localStorage.setItem('language', "TR");
      $scope.language = localStorage.getItem('language');
      var ServiceRequest = {
        service_type: "diller",
        language: localStorage.getItem('language')
      }

      $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
        localStorage.setItem('dillerJson', JSON.stringify(data));
        $scope.diller = JSON.parse(localStorage.getItem('dillerJson'));
      })
    };

    $scope.tiklabayrak = function (language) {

      localStorage.setItem('languageOld', $scope.language);
      $scope.languageOld = localStorage.getItem('languageOld');
      localStorage.setItem('language', language);
      $scope.language = localStorage.getItem('language')
      if ($scope.languageOld != $scope.language) {
        var ServiceRequest = {
          service_type: "diller",
          language: localStorage.getItem('language')
        }

        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
          localStorage.setItem('dillerJson', JSON.stringify(data));
          $scope.diller = JSON.parse(localStorage.getItem('dillerJson'));
        })
      }
      console.log(language);
    };

    //Kullanıcı Giriş Fonksiyonu

    $scope.doLogin = function () {

      // post edilecek ServiceRequest isimli değişken tanımlanır,
      var ServiceRequest = {
        service_type: "giris",
        email: $scope.loginData.email,
        sifre: $scope.loginData.password,
      }

      // Service request değişkeni web service post edilir. Gelen yanıt $scope.giris isimli değişkene atanır.
      $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
        $scope.giris = data[0]

        //Gelen veriler girlenler ile uyuşuyorsa kullanıcı ismi ve maili lokale kaydedilir.
        if ($scope.giris.login_status == true) {

          localStorage.setItem('user_id', $scope.giris.id);
          localStorage.setItem('loginStatus', 1);
          $scope.loginStatus = localStorage.getItem('loginStatus');
          $scope.loadData();

          // Kaydedilen bilgiler uygulamanın ilgili kısımlarında gösterilmek üzere kullanılır.
          $scope.userId = localStorage.getItem('user_id');
          $ionicPopup.alert({ template: "Sn. " + $scope.giris.user_name + ", Operics'e hoşgeldiniz!.." });
          console.log("Login Status = " + $scope.loginStatus);
          

        } else {

          $ionicPopup.alert({ template: $scope.giris.error_message });
          console.log("Login Status = " + $scope.loginStatus);
        };
      })
    };

    $scope.kayitButon = function (kayittab) {
      $scope.kayittab = kayittab;
      console.log($scope.kayittab);
    };

    // Kullanıcı Kayıt Fonksiyonu

    $scope.registerUser = function () {
      
      var ServiceRequest = {
        service_type: "create_user",
        photo: "img/pp.jfif",
        name: $scope.kayitData.name,
        phone: $scope.kayitData.number,
        email: $scope.kayitData.email,
        sifre: $scope.kayitData.password
      }

      // Service request değişkeni web service post edilir. Gelen yanıt $scope.kullanici isimli değişkene atanır.
      $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
        $scope.kullanici = data[0]
        localStorage.setItem('user_id', $scope.kullanici.user_id)

        if ($scope.kullanici.create_status == 1 ) {
          $ionicModal.fromTemplateUrl('templates/sms.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
        }
      })

    };

    
    
    // Sms Onay

    $scope.smsOnay = function () {
      $scope.userId = localStorage.getItem('user_id');
      var ServiceRequest = {
        service_type: "sms_verify",
        user_id: $scope.userId,
        sms_code: $scope.smsVerify.kod1 + $scope.smsVerify.kod2 + $scope.smsVerify.kod3 + $scope.smsVerify.kod4
      }
      console.log(ServiceRequest);

      $http.post($rootScope.webServiceUrl, ServiceRequest).success(function (data) {
        $scope.sms_verify = data[0]
        if ($scope.sms_verify.create_status == "true") {
          localStorage.setItem('loginStatus', 1);
          $scope.loginStatus = localStorage.getItem('loginStatus');
          $scope.loadData(); 
          $scope.modal.hide();
          console.log($scope.loginStatus);
        }
      })
    }

    //Logout işlemi

    $scope.cikis = function () {
      localStorage.removeItem('language');
      localStorage.removeItem('user_id');
      $scope.userId = localStorage.getItem('user_id');
    }

    // Profil resmi için kamera kontrolcüsü

    $scope.takePP = function () {
      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG
      }
      $cordovaCamera.getPicture({})
        .then(function (imageData) {
          console.log('camera data: ' + angular.toJson(imageData));
          $scope.pictureUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (error) {
          console.log('camera error: ' + angular.toJson(imageData))
        })
    };

    $scope.tiklaab = function (abouttab) {
      console.log(abouttab);
      $scope.abouttab = abouttab;
    };

    //Favoriye ekleme
    $scope.FavKontrol = function (kelime_id, kullanici_id) {
      console.log(kelime_id, kullanici_id);
    };

    $scope.modalgosterici = function (tur, id) {
      $scope.itemId = id;

      $scope.text_truncate = function (str, length, ending) {
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
      $scope.ConfirmApplication = function () {


        var confirmPopup = $ionicPopup.alert({
          title: "Başarılı",
          template: "Sn. Ahmet Yılmaz " + $scope.egitimler[$scope.itemId].CRS_NAME + " için ön başvurunuz alınmıuştır. En kısa sürede sizinle iritibata geçilecektir."
        });

        confirmPopup.then(function (res) {
          if (res) {
            $scope.aktifmi = true;
            var ServiceRequest = {
              service_type: "kursa_katil",
              user_id: $scope.userId,
              course_id: $scope.itemId
            }

            $http.post($rootScope.webServiceUrl, ServiceRequest)
          }
        });
      };

      // A confirm dialog
      $scope.CancelApplication = function () {
        var confirmPopup = $ionicPopup.alert({
          title: "İptal Edildi",
          template: "İptal onaylanmıştır."
        });

        confirmPopup.then(function (res) {
          if (res) {
            $scope.aktifmi = false;
            var ServiceRequest = {
              service_type: "kursu_iptal_et",
              user_id: "3",
              course_id: "2"
            }

            $http.post($rootScope.webServiceUrl, ServiceRequest)
          }
        });
      };

      switch (tur) {

        case 'service':
          $ionicModal.fromTemplateUrl('templates/service-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
          break;

        case 'course':
          $ionicModal.fromTemplateUrl('templates/course-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          })
          break;

        case 'story':
          $ionicModal.fromTemplateUrl('templates/story-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
          break;

        case 'profile':
          $ionicModal.fromTemplateUrl('templates/profile-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
          break;

        case 'team':
          $ionicModal.fromTemplateUrl('templates/team-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
          break;

        case 'dictionary':
          $ionicModal.fromTemplateUrl('templates/dictionary-detail.html', { scope: $scope }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
          });
          break;
      }
    };

    //Login Durum Kontrolü
    
    $scope.loadData();
    
  });
