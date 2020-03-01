angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $stateParams) {

$scope.operics = [{ 
    headline: 'Referanslar',
    details:[
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


    { 
    adi: 'aboutus', 
    oyuncular:[
          {adi:'Burak Özçivit',karakteri:'Osman',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574088479644.jpg', id:0},
          {adi:'Nurettin Sönmez',karakteri:'Bamsı',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574091336023.jpg', id:1},
          {adi:'Ragıp Savaş',karakteri:'Dündar',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574089922412.jpg', id:2},
          {adi:'Saruhan Hünel',karakteri:'Alişar',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574088308283.jpg', id:3},
          {adi:'İsmail Hakkı Ürün',karakteri:'Samsa',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574088852995.jpg', id:4},
          {adi:'Seda Yıldız',karakteri:'Şeyh Edebadi',im:'https://iatv.tmgrup.com.tr/2019/11/12/283x418/1573574257172.jpg', id:5},
          {adi:'Ayşegül Günay Demir',karakteri:'Zöhre',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574090914913.jpg', id:6},
          {adi:'Eren Vurdem',karakteri:'Konur Alp',im:'https://iatv.tmgrup.com.tr/2019/11/27/283x418/1574885590950.jpg', id:7},
          {adi:'Alma Terziç',karakteri:'Sofia',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574090520512.jpg', id:8},
          {adi:'Emre Basalak',karakteri:'Gündüz',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574101452807.jpg', id:9},
          {adi:'Abdül Süsler',karakteri:'Kalonoz',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574089381287.jpg', id:10},
          {adi:'Eren Hacısalihoğlu',karakteri:'Batur',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574094417269.jpg', id:11},
          {adi:'Özge Törer',karakteri:'Bala Hatun',im:'https://iatv.tmgrup.com.tr/2019/11/27/283x418/1574884761939.jpg', id:12},
          {adi:'Buse Arslan Akdeniz',karakteri:'Aygül',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574093636375.jpg', id:13},
          {adi:'Aslıhan Karalar',karakteri:'Burçin',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574101967900.jpg', id:14},
          {adi:'Uğur Arslan',karakteri:'Nizameddin',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574102558983.jpg', id:15},
          {adi:'Açelya Özcan',karakteri:'Ayşe Hatun',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574100927795.jpg', id:16},
          {adi:'Yiğit Uçan',karakteri:'Boran',im:'https://iatv.tmgrup.com.tr/2019/11/18/283x418/1574103290030.jpg', id:17}],
    bolum:[
          {no:'6. Bölüm',im:'https://iaatv.tmgrup.com.tr/aba250/960/565/0/0/1280/753?u=https://iatv.tmgrup.com.tr/2019/12/24/kurulus-osman-1577172189163.jpg', id:0},
          {no:'5. Bölüm',im:'https://iatkv.tmgrup.com.tr/b6f01a/636/362/0/0/613/349?u=https%3A%2F%2Fitkv.tmgrup.com.tr%2F2019%2F12%2F18%2Fkurulus-osman-5-bolum-full-izle-kurulus-osman-son-bolum-tek-parca-izle-1576701710662.jpg', id:1}],
    fragman:[
          {no:'8. Fragman',im:'https://iaatv.tmgrup.com.tr/b4af19/435/287/280/0/1916/1080?u=https://iatv.tmgrup.com.tr/2020/01/23/kurulus-osman-1579727498451.jpg', id:0},
          {no:'7. Fragman',im:'https://iaahbr.tmgrup.com.tr/651e92/806/378/0/0/990/464?u=https://iahbr.tmgrup.com.tr/2020/01/23/kurulus-osman-7-bolum-izle-kurulus-osman-7-bolum-tek-parca-izle-atv-1579733219678.jpg', id:1}],
    ozelv:[
          {video:'Kuruluş Osman atv de!',im:'https://iaatv.tmgrup.com.tr/e8214c/959/566/19/0/1850/1080?u=https://iatv.tmgrup.com.tr/2019/10/09/kurulus-osman-yakinda-atvde-1570644261382.jpg', id:0},
          {video:'Allah-u Ekber!',im:'https://iaatv.tmgrup.com.tr/2e32eb/960/565/84/0/1920/1080?u=https://iatv.tmgrup.com.tr/2020/01/23/kurulus-osman-1579727498451.jpg', id:1}],
    galeri:[{im:'http://img1.aksam.com.tr/fotogaleri/haber_icerik/images/220120201841295991000.jpg',yazi:'Ertuğrul Bey in hastalandığı haberi ayı Obasında b...', id:0},
            {im:'https://img.acunn.com/foto/643x390/uploads/icerikler/2019/12/27/620_400_burak-ozcivit-kurulus-osman-icin-ilham-aldi-750x481.88405797101444_5e05b7f0c1447.jpg',yazi:'Ağabeyinin yokluğunda Kayı Obasını idare eden Dün...', id:1}],
    img:'https://iatv.tmgrup.com.tr/2019/11/19/640x267/1574182897453.jpg',
    konu:'Kuruluş: Osman, Bozdağ Film imzalı, ilk bölümü 20 Kasım 2019 tarihinde yayınlanan, yönetmeliğini Metin Günayın yaptığı, senaryosunu Mehmet Bozdağın kaleme aldığı tarih ve kurgu türündeki Türk yapımı dizidir.', 
    id: 1 },


    { 
    adi: 'reference', 
    oyuncular:[
          {adi:'Vahide Perçin',karakteri:'Hünkar Yaman',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545914328576.png', id:0},
          {adi:'Uğur Güneş',karakteri:'Yılmaz Akkaya',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545914561304.png', id:1},
          {adi:'Murat Ünalmış',karakteri:'Demir Yaman',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545914733480.png', id:2},
          {adi:'Hilal Altınbilek',karakteri:'Züleyha',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545915097553.png', id:3},
          {adi:'Turgay Aydın',karakteri:'Sabahattin',im:'https://iatv.tmgrup.com.tr/2019/02/04/283x418/1549273240835.jpg', id:4},
          {adi:'Kerem Alışık',karakteri:'Ali Rahmet Fekeli',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545915339559.png', id:5},
          {adi:'Serpil Tamur',karakteri:'Haminne',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545916252104.png', id:6},
          {adi:'Bülent Polat',karakteri:'Gaffur',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545916933468.png', id:7},
          {adi:'Selin Yeninci',karakteri:'Saniye',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545917606033.png', id:8},
          {adi:'Melike İpek Yalova',karakteri:'Müjgan Hekimoğlu',im:'https://iatv.tmgrup.com.tr/2019/08/27/283x418/1566904348161.jpg', id:9},
          {adi:'Sibel Taşçı Oğlu',karakteri:'Şermin Yaman',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545918211791.png', id:10},
          {adi:'Selin Gneç',karakteri:'Gülten',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545918966582.png', id:11},
          {adi:'Polen Emre',karakteri:'Fadik',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545919592591.png', id:12},
          {adi:'Aras Şenol',karakteri:'Çetin',im:'https://iatv.tmgrup.com.tr/2018/12/27/283x418/1545921035547.png', id:3}], 
    bolum:[
          {no:'51. Bölüm',im:'https://iaatv.tmgrup.com.tr/072047/960/565/0/0/1280/754?u=https://iatv.tmgrup.com.tr/2020/01/14/bir-zamanlar-cukurova-1579004561790.jpg', id:0},
          {no:'50. Bölüm',im:'https://canlitv.com/resimler/blog/bir-zamanlar-cukurova-50-bolum-izle.jpg', id:1}],
    fragman:[
          {no:'52. Fragman',im:'http://www.fragmanlarim.com/img/2020/01/bir-zamanlar-cukurova-52-2.jpg', id:0},
          {no:'52. Fragman',im:'https://iaatv.tmgrup.com.tr/e3b396/435/287/0/0/1635/1080?u=https://iatv.tmgrup.com.tr/2020/01/17/bir-zamanlar-cukurova-1579289083788.jpg', id:1}],
    ozelv:[
          {video:'Demir Yaman Tutuklu kalıyor!',im:'https://iaatv.tmgrup.com.tr/2cb1a9/959/566/0/0/1831/1080?u=https://iatv.tmgrup.com.tr/2019/10/24/demir-yaman-tutuklu-kaliyor-1571940363946.jpg', id:0},
          {video:'Hünkar, Züleyha ya yalan söylüyor!',im:'https://iaatv.tmgrup.com.tr/a8f196/0/0/0/0/1410/703?u=https://iatv.tmgrup.com.tr/2019/05/09/hunkar-zuleyhaya-yalan-soyluyor-1557426723609.jpg', id:1}],
    galeri:[
          {im:'https://i2.milimaj.com/i/milliyet/75/1200x675/5e283b155542851c786c8506.png',yazi:'Leyla Bebek e hoşgeldin diyenlere adeta dolup taşan...', id:0},
          {im:'https://iaatv.tmgrup.com.tr/178018/435/287/2/0/1221/804?u=https://iatv.tmgrup.com.tr/2019/12/25/bir-zamanlar-cukurova-1577275616599.jpg',yazi:'Yılmaz,Müjgan ile hayatına yepyeni bir sayfa açmak...', id:1}],
    img:'https://iatv.tmgrup.com.tr/2019/08/24/640x267/1566649952855.jpg', 
    konu:'Bir Zamanlar Çukurova, Tims Productions imzalı, ilk bölümü 13 Eylül 2018 tarihinde yayınlanan, yönetmenliğini Murat Saraçoğlunun üstlendiği, senaryosunu Yıldız Tunç, Su Ersöz ve Derem Çırayın birlikte kaleme aldıkları Türk yapımı dram dizisi.', 
    id: 2 },


    { 
    adi: 'Hercai', 
    oyuncular:[
          {adi:'Akın Akınözü',karakteri:'Miran Aslanbey',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551089984641.jpg', id:0},
          {adi:'Ebru Şahin',karakteri:'Reyyan Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551089848111.jpg', id:1},
          {adi:'Macit Sonkan',karakteri:'Nasuh Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551090487962.jpg', id:2},
          {adi:'Ayda Aksel',karakteri:'Azize Aslanbey',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551090973151.jpg', id:3},
          {adi:'Serhat Tutumluer',karakteri:'Hazar Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551091339133.jpg', id:4},
          {adi:'Gülçin Santırcıoğlu',karakteri:'Sultan Aslanbey',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551095408965.jpg', id:5},
          {adi:'Tansu Taşanlar',karakteri:'Azat Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551095752228.jpg', id:6},
          {adi:'Oya Unustası',karakteri:'Gönül Aslanbey',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551096085243.jpg', id:7},
          {adi:'Gülçin Hatıhan',karakteri:'Handan Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551096602082.jpg', id:8},
          {adi:'Serdar Özer',karakteri:'Cihan Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/04/10/283x418/1554898979108.jpg', id:9},
          {adi:'Duygu Yetiş',karakteri:'Elif Aslanbey',im:'https://iatv.tmgrup.com.tr/2019/05/03/283x418/1556874045846.jpg', id:10},
          {adi:'İlay Erkök',karakteri:'Yaren Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551096935047.jpg', id:11},
          {adi:'Feride Çetin',karakteri:'Zehra Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/04/10/283x418/1554887683657.jpg', id:12},
          {adi:'Cahit Gök',karakteri:'Fırat Demiralp',im:'https://iatv.tmgrup.com.tr/2019/04/10/283x418/1554887385641.jpg', id:13},
          {adi:'Ebrar Demirbilek',karakteri:'Gül Şadoğlu',im:'https://iatv.tmgrup.com.tr/2019/02/25/283x418/1551099455239.jpg', id:14}],
    bolum:[
          {no:'28. Bölüm',im:'https://iaatv.tmgrup.com.tr/f6c2ef/960/565/56/0/1280/720?u=https://iatv.tmgrup.com.tr/2020/01/16/hercai-1579159468620.jpg', id:0},
          {no:'27. Bölüm',im:'https://iaatv.tmgrup.com.tr/928fd0/959/566/0/0/1280/755?u=https://iatv.tmgrup.com.tr/2019/12/26/hercai-1577344842808.jpg', id:1}],
    fragman:[
          {no:'29. Fragman',im:'https://iaatv.tmgrup.com.tr/47352b/0/0/0/0/0/0?u=https://iatv.tmgrup.com.tr/album/2020/01/23/29-bolum-foto-galeri-1579763875380.jpg&mw=621', id:0},
          {no:'28. Fragman',im:'https://iaftm.tmgrup.com.tr/5da762/627/337/0/0/1920/1033?u=https://iatv.tmgrup.com.tr/2020/01/07/1578351731820.jpg', id:1}],
    ozelv:[
          {video:'Miran ın Karısı benim!',im:'https://iaatv.tmgrup.com.tr/9da45d/959/566/19/0/1850/1080?u=https://iatv.tmgrup.com.tr/2019/03/25/yer-gok-duysun-miran-aslanbeyin-karisi-benim-1553506286905.jpg', id:0},
          {video:'Hazar Şadoğlu,Mirana Yumruk atıyor!',im:'https://iaatv.tmgrup.com.tr/e689e9/959/566/65/0/1896/1080?u=https://iatv.tmgrup.com.tr/2019/08/16/hazar-sadoglu-mirana-yumruk-atiyor-1565974586927.jpg', id:1}],
    galeri:[
          {im:'https://iaatv.tmgrup.com.tr/73f800/0/0/0/0/0/0?u=https://iatv.tmgrup.com.tr/album/2020/01/23/29-bolum-foto-galeri-1579763878996.jpg&mw=621',yazi:'En kıymetlisi elinden alınan Azize,Nasuh un canını ya...', id:0},
          {im:'https://iaatv.tmgrup.com.tr/2e0f06/0/0/0/0/0/0?u=https://iatv.tmgrup.com.tr/album/2020/01/16/hercainin-2-sezonunda-neler-oldu-1579177127301.jpg&mw=621',yazi:'Elif in,Azatla evlenmesi Aslanbey ailesinde deprem...', id:1}],
    img:'https://iatv.tmgrup.com.tr/2019/09/18/640x267/1568795543870.jpg', 
    konu:'Hercai, Mia yapım imzalı, 15 Mart 2019 tarihinden itibaren atv de yayınlanmaya başlayan, yönetmen koltuğuna Cem Karcı ve Benal Tairinin oturduğu, senaryosunu Eda Tezcan ve Feraye Şahinin birlikte kaleme aldıkları Türk yapımı dram dizisi.', 
    id: 3 },


    { 
    adi: 'Beni Bırakma', 
    oyuncular:[
          {adi:'Berkay Veli',karakteri:'Emre',im:'https://iatv.tmgrup.com.tr/2018/01/04/283x418/1515086792885.jpg', id:0},
          {adi:'Merve Üçer',karakteri:'Elif',im:'https://iatv.tmgrup.com.tr/2019/09/09/283x418/1568025119065.jpg', id:1},
          {adi:'Emrah Akduman',karakteri:'Tarık',im:'https://iatv.tmgrup.com.tr/2018/01/04/283x418/1515086426348.jpg', id:2},
          {adi:'Sude Doğar',karakteri:'Sıla',im:'https://iatv.tmgrup.com.tr/2018/01/04/283x418/1515097101296.jpg', id:3},
          {adi:'Esengül Aypek',karakteri:'Meltem',im:'https://iatv.tmgrup.com.tr/2018/01/04/283x418/1515087232607.jpg', id:4}],
    bolum:[
          {no:'372. Bölüm',im:'https://iaatv.tmgrup.com.tr/9d12fa/960/565/32/0/988/563?u=https://iatv.tmgrup.com.tr/2020/01/21/beni-birakma-1579587084100.jpg', id:0},
          {no:'371. Bölüm',im:'https://iaatv.tmgrup.com.tr/07d1df/0/0/0/0/1920/957?u=https://iatv.tmgrup.com.tr/2020/01/20/beni-birakma-1579501166501.jpg', id:1}],
    fragman:[
          {no:'361. Fragman',im:'https://iaatv.tmgrup.com.tr/ddb3cc/959/566/0/0/741/437?u=https://iatv.tmgrup.com.tr/2020/01/03/beni-birakma-1578053553428.jpg', id:0},
          {no:'196. Fragman',im:'https://iaatv.tmgrup.com.tr/5ad236/0/0/0/0/1920/957?u=https://iatv.tmgrup.com.tr/2019/02/01/beni-birakma-1549038644487.jpg', id:1}],
    ozelv:[
          {video:'Anne ben bir hata yaptım!',im:'https://iatv.tmgrup.com.tr/video/thumbnails/2018/01/12/959x566/1515760638086.jpg', id:0},
          {video:'Aşk korkaklara göre değil,Emre!',im:'https://iaatv.tmgrup.com.tr/284cd1/959/566/0/0/954/563?u=https://iatv.tmgrup.com.tr/2018/03/22/1521722395488.jpg', id:1}],
    galeri:[
          {im:'https://iatv.tmgrup.com.tr/video/thumbnails/2018/01/19/959x566/1516270556380.jpg',yazi:'Zeynep ve Arzu arasındaki tanışmanın sonrasında Ar...', id:0},
          {im:'https://www.magazinkolik.com/d/news/53708.jpg',yazi:'Emre ile ayrılamayacağını anlayan Zeynep,ona bir m...', id:1}],
    img:'https://iatv.tmgrup.com.tr/2019/09/09/640x267/1568023584479.jpg',
    konu:'Kocasindan büyük oglu Tarikin babasini saklayan bir annenin bu sirri arkadaslari tarafindan kullanilmasiyla hayati tepetaklak olur.',  
    id: 4}
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
