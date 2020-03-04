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
   
    $scope.operics = [

    {

        tr: [{

            references: [
                { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
                { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
                { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
                { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
                { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
                { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
            ],
           
            team: [
                {
                    name: 'Şule Deniz',
                    pos: 'Genel Müdür',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/997e74/435/287/0/0/1280/845?u=https://iatv.tmgrup.com.tr/2019/12/23/eskiya-dunyaya-hukumdar-olmaz-1577085009013.jpg',
                    id: 0
                },
                {
                    name: 'Ahmet Erkoç',
                    pos: 'Eğitim Direktörü',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 1
                },
                {
                    name: 'Damla Erol',
                    pos: 'İK Uzmanı',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 2
                }
            ],

            services: [{
                    name: 'Analizler',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-analytics',
                    id: 0
                },
                {
                    name: 'İSG Danışmanlık',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-people',
                    id: 1
                },
                {
                    name: 'Destek',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-android-desktop',
                    id: 2
                }
            ],
           
            courses : [{
                    name: 'Endüstriyel Teknolojiler ve Teknikleri Genel Değerlendirme Eğitimi',
                    des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
                    img: 'https://eysosgb.com/wp-content/uploads/2019/05/i%C5%9F-g%C3%BCvenli%C4%9Fi-mevzat%C4%B1-isg-mevzuat%C4%B1-6331-say%C4%B1l%C4%B1-isg-kanunu-istanbul-osgb.jpg',
                    len: '20 saat',
                    loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
                    date: '12.03.2020 - 12.06.2020',
                    id: 0
                }
            ],

            headlines: [
                { name: 'Müşteri Hikayeleri', id: 0 },
                { name: 'Hizmetlerimiz', id: 1 },
                { name: 'Referanslar', id: 2 },
                { name: 'Ekibimiz', id: 3 }
            ],

            tabs: [
                { name: 'Ana Sayfa', id: 0 },
                { name: 'Hakkımızda', id: 1 },
                { name: 'Eğitimlermiz', id: 2 },
                { name: 'Sözlük', id: 3 },
                { name: 'İletişim', id: 3 },
                { name: 'Hesabım', id: 3 }
            ]
   
    }], id: 0},
    {
        
        en: [{

            references: [
                { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
                { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
                { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
                { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
                { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
                { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
            ],

            team: [
                {
                    name: 'Şule Deniz',
                    pos: 'Genel Müdür',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/997e74/435/287/0/0/1280/845?u=https://iatv.tmgrup.com.tr/2019/12/23/eskiya-dunyaya-hukumdar-olmaz-1577085009013.jpg',
                    id: 0
                },
                {
                    name: 'Ahmet Erkoç',
                    pos: 'Eğitim Direktörü',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 1
                },
                {
                    name: 'Damla Erol',
                    pos: 'İK Uzmanı',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 2
                }
            ],

            services: [{
                    name: 'Analizler',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-analytics',
                    id: 0
                },
                {
                    name: 'İSG Danışmanlık',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-people',
                    id: 1
                },
                {
                    name: 'Destek',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-android-desktop',
                    id: 2
                }
            ],
         
            courses : [{
                    name: 'Endüstriyel Teknolojiler ve Teknikleri Genel Değerlendirme Eğitimi',
                    des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
                    img: 'https://eysosgb.com/wp-content/uploads/2019/05/i%C5%9F-g%C3%BCvenli%C4%9Fi-mevzat%C4%B1-isg-mevzuat%C4%B1-6331-say%C4%B1l%C4%B1-isg-kanunu-istanbul-osgb.jpg',
                    len: '20 saat',
                    loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
                    date: '12.03.2020 - 12.06.2020',
                    id: 0
                }
            ],
 
            headlines: [
                { name: 'Müşteri Hikayeleri', id: 0 },
                { name: 'Hizmetlerimiz', id: 1 },
                { name: 'Referanslar', id: 2 },
                { name: 'Ekibimiz', id: 3 }
            ],

            tabs: [
                { name: 'Ana Sayfa', id: 0 },
                { name: 'Hakkımızda', id: 1 },
                { name: 'Eğitimlermiz', id: 2 },
                { name: 'Sözlük', id: 3 },
                { name: 'İletişim', id: 3 },
                { name: 'Hesabım', id: 3 }
            ]
    }], id: 1},
    {
     
        de: [{

            references: [
                { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
                { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
                { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
                { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
                { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
                { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
            ],
        
            team: [
                {
                    name: 'Şule Deniz',
                    pos: 'Genel Müdür',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/997e74/435/287/0/0/1280/845?u=https://iatv.tmgrup.com.tr/2019/12/23/eskiya-dunyaya-hukumdar-olmaz-1577085009013.jpg',
                    id: 0
                },
                {
                    name: 'Ahmet Erkoç',
                    pos: 'Eğitim Direktörü',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 1
                },
                {
                    name: 'Damla Erol',
                    pos: 'İK Uzmanı',
                    des: '10 Yıldan fazla sektör tecrübesine sahiptir. Bilgisayar mühendisliği bölümü mezunudur.',
                    img: 'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg',
                    id: 2
                }
            ],

            services: [{
                    name: 'Analizler',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-analytics',
                    id: 0
                },
                {
                    name: 'İSG Danışmanlık',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-ios-people',
                    id: 1
                },
                {
                    name: 'Destek',
                    des: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    detdes: 'Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin. Sektöre yönelik analizlerimiz ile işinizi hızlı ve kolay şekilde gelişin.',
                    ico: 'ion-android-desktop',
                    id: 2
                }
            ],
        
            courses : [{
                    name: 'Endüstriyel Teknolojiler ve Teknikleri Genel Değerlendirme Eğitimi',
                    des: 'İsg profesyonellerine endüstride karşılanabilecek toksik maruziyetleri etkin bir şekilde değerlendirebilme ve süreci yönetebilme ve süreci yönetebilme bilgi ve becerisi kazandırılması',
                    img: 'https://eysosgb.com/wp-content/uploads/2019/05/i%C5%9F-g%C3%BCvenli%C4%9Fi-mevzat%C4%B1-isg-mevzuat%C4%B1-6331-say%C4%B1l%C4%B1-isg-kanunu-istanbul-osgb.jpg',
                    len: '20 saat',
                    loc: 'Maltepe Mah Yıldız İş Hanı Kat:17 Esentepe / Ankara',
                    date: '12.03.2020 - 12.06.2020',
                    id: 0
                }
            ],
        
            headlines: [
                { name: 'Müşteri Hikayeleri', id: 0 },
                { name: 'Hizmetlerimiz', id: 1 },
                { name: 'Referanslar', id: 2 },
                { name: 'Ekibimiz', id: 3 }
            ],
        
            tabs: [
                { name: 'Ana Sayfa', id: 0 },
                { name: 'Hakkımızda', id: 1 },
                { name: 'Eğitimlermiz', id: 2 },
                { name: 'Sözlük', id: 3 },
                { name: 'İletişim', id: 3 },
                { name: 'Hesabım', id: 3 }
            ]
           
    }], id: 2
    }]


    if ($stateParams.detayId) {
        $scope.bilgi = $scope.Operics[$stateParams.detayId];
    } 

});



