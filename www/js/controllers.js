angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $ionicModal, $http) {

    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

    var ServiceRequest = {
        service_type: "referanslar"
    }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.referanslar= data
            $scope.parameter= data.ID
        })

        var ServiceRequest = {
            service_type: "egitimler"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.egitimler= data
        })


       /*
       var ServiceRequest = {
            service_type: "sozluk"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data[0]
        })
        */
        

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
            img: 'img/stories/5.png',
            id: 1
        },
        
        {
            head: 'Honda C Sınıfı İSG Uzmanları Arıyor',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/stories/4.png',
            id: 2
        }
        ];


        $ionicModal.fromTemplateUrl('templates/detail.html', {scope: $scope}).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.extendstory = function() {        
            $scope.modal.hide();
        };



        $scope.team = [
        {
            name: 'Şule Deniz',
            pos: 'Genel Müdür',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/team/3.png',
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
            img: 'img/team/1.png',
            id: 2
        }
        ];

        $scope.courses = [
        {
            name: 'Teknik İşler İş Sağlığı Eğitiminiz',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/courses/1.png',
            len: '20 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '19 Mart 2020',
            id: 0
        },
        {
            name: 'ISO 3100 Eğitimi',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/courses/2.png',
            len: '10 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '29 Mart 2020',
            id: 1
        },
        {
            name: 'ISG Eğitimi',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/courses/3.png',
            len: '25 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '10 Nisan 2020',
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
        { name: 'İletişim', id: 3 },
        { name: 'Hesabım', id: 3 }
        ];

        if ($stateParams.detayId) {
            $scope.bilgi = $scope.Operics[$stateParams.detayId];
        } 

    });




