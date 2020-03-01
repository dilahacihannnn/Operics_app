angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $stateParams) {

$scope.operics = [{ 
    Referanslar:[
          {adi:'Oktay Kaynarca',karakteri:'Hızır Çakırbeyli',im:'https://iatv.tmgrup.com.tr/2018/09/20/283x418/1537457146852.jpg', id:0},
          {adi:'Tarık Ünlüoğlu',karakteri:'Ünal Kaplan',im:'https://iatv.tmgrup.com.tr/2016/05/13/269x297/1463151873975.png', id:1},
          {adi:'Yunus Emre Yıldırımer',karakteri:'Alpaslan Çakırbeyli',im:'https://iatv.tmgrup.com.tr/2016/05/13/269x297/1463151925899.png', id:2},
          {adi:'Burak Sergen',karakteri:'Feyyaz Meftun',im:'https://iatv.tmgrup.com.tr/2019/09/25/283x418/1569394945730.jpg', id:3},
          {adi:'Ozan Akbaba',karakteri:'İlyas Çakırbeyli',im:'https://iatv.tmgrup.com.tr/2016/05/13/269x297/1463151905576.png', id:4},
          {adi:'Naz Elmas',karakteri:'Sevda Meftun',im:'https://iatv.tmgrup.com.tr/2019/09/25/283x418/1569395077297.jpg', id:5},
          {adi:'Sabina Toziya',karakteri:'Hayriye Çakırbeyli',im:'https://iatv.tmgrup.com.tr/2016/05/13/269x297/1463151941761.png', id:6},
          {adi:'Kenan Çoban',karakteri:'Fahri',im:'https://iatv.tmgrup.com.tr/2017/10/11/283x418/1507723117836.jpg', id:7},
          {adi:'Turgay Tanülkü',karakteri:'Şahin Ağa',im:'https://iatv.tmgrup.com.tr/2018/03/15/269x297/1521099425762.png', id:8},
          {adi:'Haydar Şişman',karakteri:'Hurşit Dere',im:'https://iatv.tmgrup.com.tr/2017/09/20/283x418/1505900951271.jpg', id:9},
          {adi:'Yalçın Hafızoğlu',karakteri:'Hızır Ali Çakırbeyli',im:'https://iatv.tmgrup.com.tr/2017/10/16/283x418/1508147264485.jpg',id:10}],
    bolum:[
          {no:'153. Bölüm',im:'https://iaatv.tmgrup.com.tr/997e74/435/287/0/0/1280/845?u=https://iatv.tmgrup.com.tr/2019/12/23/eskiya-dunyaya-hukumdar-olmaz-1577085009013.jpg', id:0},
          {no:'152. Bölüm',im:'https://iaatv.tmgrup.com.tr/238c4a/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/16/eskiya-dunyaya-hukumdar-olmaz-1576480765035.jpg', id:1}],  
    fragman:[
          {no:'153. Fragman',im:'https://iaatv.tmgrup.com.tr/385d67/0/0/0/0/1920/957?u=https://iatv.tmgrup.com.tr/2019/12/22/eskiya-dunyaya-hukumdar-olmaz-1577039206515.jpg', id:0},
          {no:'152. Fragman',im:'https://iaatv.tmgrup.com.tr/435fd7/959/566/69/0/1900/1080?u=https://iatv.tmgrup.com.tr/2019/12/15/eskiya-dunyaya-hukumdar-olmaz-1576430765515.jpg', id:1}], 
    ozelv:[
          {video:'Teoman Nerede?',im:'https://iatv.tmgrup.com.tr/video/thumbnails/2017/10/10/959x566/1507657884908.jpg', id:0},
          {video:'Pişman Olacakasın',im:'https://i.ytimg.com/vi/5tkP-4GFqaU/maxresdefault.jpg', id:1}],
    galeri:[
          {im:'https://i2.milimaj.com/i/milliyet/75/0x410/5e255b7c55427f1dfc286732.jpg',yazi:'Hızır Çakırbeyli, silah ticaretindeki gücüne güç katm...', id:0},
          {im:'https://i4.hurimg.com/i/hurriyet/75/750x422/5e1de968d3806c0ee0f98444.jpg',yazi:'Tufan, Cengiz ile yaptığı anlaşmanın sonucunda,Hızır...', id:1}],
    img:'https://iatv.tmgrup.com.tr/2019/09/24/640x267/1569335900963.jpg',
    konu:' Hızır Çakırbeyli, sözüne güvenilir bir adam olarak devlet tarafindan bazı gayri meşru faaliyetleri kontrol etmek için iş teklifi alir. Teklif cok zordur; kabul ederse mafya ailesine ihanet, reddederse ebediyen mahkumiyetle yüzyüzedir.' , 
    id: 0 },


    
];





if($stateParams.detayId) {
      $scope.bilgi = $scope.diziler[$stateParams.detayId];
}

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
