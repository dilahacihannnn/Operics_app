angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $http) {
      
    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

        /* var ServiceRequest = {
            service_type: "referanslar"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.referanslar= data
        })

       var ServiceRequest = {
            service_type: "sozluk"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data[0]
        })
        */

    $scope.x = 0;

    $scope.tikla=function() {
        console.log($scope.x);
    }

    $scope.stories = [
        {
            head: 'Microsoft İş Güvenliği Danışmanlığı',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/m.jpg',
            id: 0
        },
        {
            head: 'Yıldız Teknik Üniversitesi İSG Eğitimleri',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/y.png',
            id: 1
        },
        {
            head: 'Honda C Sınıfı İSG Uzmanları Arıyor',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/h.png',
            id: 2
        }
    ];
   
    $scope.references = [
        { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
        { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
        { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
        { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
        { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
        { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
    ];
           
    $scope.team = [
        {
            name: 'Şule Deniz',
            pos: 'Genel Müdür',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/k.jpg',
            id: 0
        },
        {
            name: 'Ahmet Erkoç',
            pos: 'Eğitim Direktörü',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/ia.png',
            id: 1
        },
        {
            name: 'Damla Erol',
            pos: 'İK Uzmanı',
            des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
            img: 'img/rsm/dm.jpg',
            id: 2
        }
    ];

    $scope.services = [
        {
            name: 'Analizler',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/rsm/a.png',
            id: 0
        },
        {
            name: 'İSG Danışmanlık',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/rsm/d.png',
            id: 1
        },
        {
            name: 'Destek',
            des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
            ico: 'img/rsm/b.png',
            id: 2
        }
    ];
           
    $scope.courses = [
        {
            name: 'Teknik İşler İş Sağlığı Eğitiminiz',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/isgrsm/i1.jpg',
            len: '20 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '19 Mart 2020',
            id: 0
        },
        {
            name: 'ISO 3100 Eğitimi',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/isgrsm/i2.png',
            len: '10 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '29 Mart 2020',
            id: 1
        },
        {
            name: 'ISG Eğitimi',
            des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
            img: 'img/isgrsm/i3.png',
            len: '25 saat',
            loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
            date: '10 Nisan 2020',
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



