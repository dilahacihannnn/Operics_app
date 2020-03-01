angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $http) {
      
    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

        var ServiceRequest = {
            service_type: "referanslar"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.referanslar= data[0]
        })

       var ServiceRequest = {
            service_type: "sozluk"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data[0]
        })

    /*
    $scope.Operics = [{

        Referanslar: [
            { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
            { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
            { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
            { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
            { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
            { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
        ],
        Ekibimiz: [{
                adi: 'Şule Deniz',
                unvani: 'Genel Müdür',
                aciklama: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                im: 'https://iaatv.tmgrup.com.tr/997e74/435/287/0/0/1280/845?u=https://iatv.tmgrup.com.tr/2019/12/23/eskiya-dunyaya-hukumdar-olmaz-1577085009013.jpg',
                id: 0
            },
            {
                adi: 'Ahmet Erkoç',
                unvani: 'Eğitim Direktörü',
                aciklama: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                im: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                id: 1
            },
            {
                adi: 'Damla Erol',
                unvani: 'İK Uzmanı',
                aciklama: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                im: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                id: 2
            }
        ],
        Hizmetlerimiz: [{
                adi: 'Analizler',
                aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                uzun_aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                ikon: 'ion-ios-analytics',
                id: 0
            },
            {
                adi: 'İSG Danışmanlık',
                aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                uzun_aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                ikon: 'ion-ios-people',
                id: 1
            },
            {
                adi: 'Destek',
                aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                uzun_aciklama: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                ikon: 'ion-android-desktop',
                id: 2
            }
        ],
        Eğitimlerimiz: [{
                adi: 'Endüstriyel Teknolojiler ve Teknikleri Genel Değerlendirme Eğitimi',
                aciklama: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
                im: 'https://eysosgb.com/wp-content/uploads/2019/05/i%C5%9F-g%C3%BCvenli%C4%9Fi-mevzat%C4%B1-isg-mevzuat%C4%B1-6331-say%C4%B1l%C4%B1-isg-kanunu-istanbul-osgb.jpg',
                saat: '20 saat',
                konum: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
                tarih: '12.03.2020 - 12.06.2020',
                id: 0
            },

        ]

    }];


    if ($stateParams.detayId) {
        $scope.bilgi = $scope.diziler[$stateParams.detayId];
    } */

})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});