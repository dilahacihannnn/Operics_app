angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $ionicModal, $http, $ionicPopup) {

localStorage.setItem('language', "tr");

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

    $scope.doLogin = function() {
    // post edilecek ServiceRequest isimli değişken tanımlanır,
        var ServiceRequest = {
            service_type: "giris",
            email:$scope.loginData.email,
            sifre: $scope.loginData.password
        }
    // Service request değişkeni web service post edilir. Gelen yanıt $scope.giris isimli değişkene atanır.
        $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
            $scope.giris= data
        })   
    };

    $scope.registerUser = function() {

        var ServiceRequest = {
            service_type: "",
            name: "Deneme isim ve soyisim",
            sifre: "123456",
            email: "E posta adresi",
            phone: "05551234567",
            photo: "img/deneme.jpg",
            user_type: "genel",
            department: "Satış Departmanı",
            job: "Satış Sorumlusu"
        }
        // Service request değişkeni web service post edilir. Gelen yanıt $scope.kullanici isimli değişkene atanır.
        $http.post($rootScope.webServiceUrl,ServiceRequest).success(function(data) {
            $scope.kullanici= data
        })
    };

    $scope.stories = [
        {
            head: 'Arçelik İş Güvenliği Danışmanlığı',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/1.png',
            id: 0
        },
        {
            head: 'Microsoft İSG Eğitimleri',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/2.png',
            id: 1
        },

        {
            head: 'Yıldız Teknik Üniversitesi İSG Eğitimleri',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/3.png',
            id: 2
        },

        {
            head: 'Turkcell İSG Eğitimleri',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/4.png',
            id: 3
        }

    ];

    var ServiceRequest = {
        service_type: "referanslar",
        language: localStorage.getItem('language')
    }
        // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
        $scope.referanslar= data
        $scope.parameter= data.ID
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

    $scope.extendstory = function() {        
        $scope.modal.hide();
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
            }
        });
    };

   

    
           
    $scope.team = [
        {
            name: 'Şule Deniz',
            pos: 'Genel Müdür',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/team/1.png',
            id: 0
        },
        {
            name: 'Ahmet Erkoç',
            pos: 'Eğitim Direktörü',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/team/2.png',
            id: 1
        },
        {
            name: 'Damla Erol',
            pos: 'İK Uzmanı',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/team/3.png',
            id: 2
        }
    ];


    $scope.services = [
        {
            name: 'Analizler',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/services/1.png',
            id: 0
        },
        {
            name: 'İSG Danışmanlık',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/services/2.png',
            id: 1
        },
        {
            name: 'Destek',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/services/3.png',
            id: 2
        }
    ];
        
    
   
    
});




