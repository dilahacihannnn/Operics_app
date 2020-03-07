angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $ionicModal, $http) {

localStorage.setItem('language', "tr");

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

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
    
    $scope.coursedetail = $stateParams.courseId;
    
    

    var ServiceRequest = {
        service_type: "sozluk",
        language: localStorage.getItem('language')
    }
    // Yeni user isteği post edilir ve veritabanına eklenir.
    $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data[0]
    })

    $scope.sozlukdetail = $stateParams.sozlukId;
    
        

    $scope.abouttab = 0;
    $scope.bottomtab = 0;

    $scope.tiklaab=function() {
        console.log($scope.abouttab);
    };

    $scope.tiklabot=function() {
        console.log($scope.bottomtab);
    };
    


   

    $scope.stories = [
        {
            head: 'Microsoft İş Güvenliği Danışmanlığı',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/3.png',
            id: 0
        },
        {
            head: 'Yıldız Teknik Üniversitesi İSG Eğitimleri',
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
            head: 'Yıldız Teknik Üniversitesi İSG Eğitimleri',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/4.png',
            id: 3
        }
        

    ];

    $scope.modalgosterici = function(tur, id){
      $scope.itemId = id;
        
      switch(tur){

        case 'service':
          $ionicModal.fromTemplateUrl('templates/service-detail/.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
        break;

        case 'course':
          $ionicModal.fromTemplateUrl('templates/course-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          })
        break;

        case 'story':
          $ionicModal.fromTemplateUrl('templates/story-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
        break;

        case 'profile':
          $ionicModal.fromTemplateUrl('templates/profile-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
        break;

        case 'team':
          $ionicModal.fromTemplateUrl('templates/team-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
        break;

        case 'dictionary':
          $ionicModal.fromTemplateUrl('templates/dictionary-detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
          });
        break;
      }

       



    };

    $scope.extendstory = function() {        
        $scope.modal.hide();
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
        
    $scope.headlines = [
        { name: 'Müşteri Hikayeleri', id: 0 },
        { name: 'Hizmetlerimiz', id: 1 },
        { name: 'Referanslar', id: 2 },
        { name: 'Ekibimiz', id: 3 }
    ];

    $scope.tabs = [
        { name: 'Ana Sayfa', id: 0 },
        { name: 'Hakkımızda', id: 1 },
        { name: 'Eğitimlermiz', id: 2 },
        { name: 'Sözlük', id: 3 },
        { name: 'İletişim', id: 4 },
        { name: 'Profilim', id: 5 }
    ];
    
   
    
});




