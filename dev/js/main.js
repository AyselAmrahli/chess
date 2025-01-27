$(document).ready(function(){

  var $fancy_box_video = $('.fancy-box-video');
  var $datepicker = $('.datepicker');
  var $gallery = $('.grouped_elements');

  // fancybox to video
  if($fancy_box_video.length){
    $fancy_box_video.fancybox({
      type: 'iframe',
      height : '50%',
      // fitToView : false,
      autoSize : false,
      helpers: {
        media: {}
    }
    });
  }

  if ($datepicker.length) {
    $('.datepicker').datepicker({
      format: 'mm.dd.yyyy',
    });
  }

  if($gallery.length) {
    $gallery.fancybox();

    $('.gallery-item').on('click', function(e) {
      e.preventDefault()
      var rel = $(this).attr('rel');

      $('[rel='+rel+']').eq(1).trigger('click')
    })
  }

  $('.nav-item.dropdown .nav-link').on('click', function(e) {
    e.preventDefault()
  })


    // footer map init function
  function initFooterMap(dataLat,dataLong) {
    var myLatLng = {lat: dataLat, lng: dataLong};
    var map = new google.maps.Map(document.getElementById('footer-map'), {
      center: myLatLng,
      zoom: 17,
      disableDefaultUI: true,
    });

    var contentString = '<div class="d-flex align-items-center"><img src="assets/img/logo-footer.png" /><p>Azerbaycan Sahmat Federasiyasi</p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
  
    var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAhCAMAAAAF18AiAAAAAXNSR0IB2cksfwAAARpQTFRFAAAA1rRp17Rq17Vq17Nq17Rq17Nq2LVq1rVr1LVq1rNq17Rq17Rq17Rq0rRp/39/1rRq17Rq2LRq/6pV17Rp17Rq17Nr17Vs1rRr2LVq3btm17Rr17Nq17Nq17Vr17Np17Rp2LRr1bJr17Rq17Rr1rRq17Vs2bNt17Rq17Rq2LVr2LVr27Zt17Rq2LRr17Rq17Npz69w17Rq17Rq1rRq17Rp2rRq2bRp17Rq1rNn1KpV1rNq17Rq1rhm17Rq17Vq17Rq17Rp27Zt1rZp2LRq1bZo17Rq17Rq17Rq1Kpq1LJm1rRq17Nq1rRq17Rq1LVq17Rq17Nr17Rq17Rq2LVs17Rp17Rq2LVq17Rq07Fv17Rq1rNr17Jp17RrIgD+qAAAAF50Uk5TAESMudjfx6hkGFfU//YRAqrqQQPQUr0tcOIP+c6RhrNmYivL4cNTL/i+T24H84iachD68WOFKSJzJQZe9BnIwOa4DjiVMY67+wweaoDW5DA6lOXgNG3Nr/wX60o/gfI6pNgAAAENSURBVHicbdJnX8IwEAbwxwqKci4ciIoDBQUHoOJW3HsrOPn+XwOau5Sk4d4kz7/pL5e0AFeX1x2J9vTG+mBWf5ykBrzBQIeGyaiRhPDoGNk1zj5B4Ur6POkwpVo8NS1hJj07px/Mt5cv+O9mFjksAVme5aSJKMdlrKgxr3susK+Cx5j2tXWVN8QLwSFTKhfFS5rLmyp72FJjRHuJ120jz5MK846cZhd70n9xHzg4POIQB46D059UT/XU3+7MvR86b/mFy5dqr6zj/MmuwnwtPd/YfHsnfm/7Q3AnjyY/Gf/Js+Evhr+2+c36sdKa32HXh/hnyDPMFYSr5nPdYeCL6Pung+OX/jox/htGaAJjTyQlcU7M0wAAAABJRU5ErkJggg==';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map:map,
      icon:image
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  infowindow.open(map,marker);
  }

    //  contact map init function
  function initContactMap(dataLat,dataLong) {
    var myLatLng = {lat: dataLat, lng: dataLong};
    var map = new google.maps.Map(document.getElementById('contact-map'), {
      center: myLatLng,
      zoom: 17,
      disableDefaultUI: true,
    });

    var contentString = '<div class="d-flex align-items-center"><img src="assets/img/logo-footer.png" /><p>Azerbaycan Sahmat Federasiyasi</p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
  
    var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAhCAMAAAAF18AiAAAAAXNSR0IB2cksfwAAARpQTFRFAAAA1rRp17Rq17Vq17Nq17Rq17Nq2LVq1rVr1LVq1rNq17Rq17Rq17Rq0rRp/39/1rRq17Rq2LRq/6pV17Rp17Rq17Nr17Vs1rRr2LVq3btm17Rr17Nq17Nq17Vr17Np17Rp2LRr1bJr17Rq17Rr1rRq17Vs2bNt17Rq17Rq2LVr2LVr27Zt17Rq2LRr17Rq17Npz69w17Rq17Rq1rRq17Rp2rRq2bRp17Rq1rNn1KpV1rNq17Rq1rhm17Rq17Vq17Rq17Rp27Zt1rZp2LRq1bZo17Rq17Rq17Rq1Kpq1LJm1rRq17Nq1rRq17Rq1LVq17Rq17Nr17Rq17Rq2LVs17Rp17Rq2LVq17Rq07Fv17Rq1rNr17Jp17RrIgD+qAAAAF50Uk5TAESMudjfx6hkGFfU//YRAqrqQQPQUr0tcOIP+c6RhrNmYivL4cNTL/i+T24H84iachD68WOFKSJzJQZe9BnIwOa4DjiVMY67+wweaoDW5DA6lOXgNG3Nr/wX60o/gfI6pNgAAAENSURBVHicbdJnX8IwEAbwxwqKci4ciIoDBQUHoOJW3HsrOPn+XwOau5Sk4d4kz7/pL5e0AFeX1x2J9vTG+mBWf5ykBrzBQIeGyaiRhPDoGNk1zj5B4Ur6POkwpVo8NS1hJj07px/Mt5cv+O9mFjksAVme5aSJKMdlrKgxr3susK+Cx5j2tXWVN8QLwSFTKhfFS5rLmyp72FJjRHuJ120jz5MK846cZhd70n9xHzg4POIQB46D059UT/XU3+7MvR86b/mFy5dqr6zj/MmuwnwtPd/YfHsnfm/7Q3AnjyY/Gf/Js+Evhr+2+c36sdKa32HXh/hnyDPMFYSr5nPdYeCL6Pung+OX/jox/htGaAJjTyQlcU7M0wAAAABJRU5ErkJggg==';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map:map,
      icon:image
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  infowindow.open(map,marker);
  }


  initFooterMap(40.5899455,49.6676165)
  initContactMap(40.5899455,49.6676165)

});