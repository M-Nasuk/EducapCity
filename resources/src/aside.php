<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.2"></script>
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
<script type="text/javascript">function showpics(){var a=$("#box").val();$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+a+"&tagmode=any&format=json&jsoncallback=?",function(a){$("#images").hide().html(a).fadeIn("fast"),$.each(a.items,function(a,e){$("<img/>").attr("src",e.media.m).appendTo("#images")})})}</script>

<h2 class="actu jah_font">ACTUALITÉS</h2>
<aside>

  <!-- FACEBOOK FEED -->
  <div class="fb">
    <div id="fb-root"></div>
    <div class="fb-page" data-href="https://www.facebook.com/EducapCity/" data-tabs="timeline" data-width="285" data-height="661" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/EducapCity/" class="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/EducapCity/">EducapCity</a>
      </blockquote>
    </div>
  </div>

  <!-- INSTAGRAM FEED -->
  <div class="div_insta">
    <a href="https://www.instagram.com/educap_city/" target="_blank"><img src="resources/images/reseaux/logo_instagram.jpg" alt="logo instagram"/></a>
    <iframe src="//lightwidget.com/widgets/d39add6bfc8c54249fd34e3751e30ea8.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
  </div>

  <!-- TWITTER FEED -->
  <div class="tweeter">
    <a class="twitter-timeline" data-width="285" data-height="661" href="https://twitter.com/EducapCity?ref_src=twsrc%5Etfw">Tweets by EducapCity</a>
  </div>

  <!-- YOUTUBE FEED -->
  <div class="yt">
    <div class="elfsight-app-ca182df2-e466-4b81-af98-68cf132d65f4"></div>

    <div class="d_kill">
      <div class="kill">

      </div>
    </div>
  </div>

  <!-- TWITTER FEED -->
  <div class="flickr">
    <a href="https://www.flickr.com/search/?text=educap%20city" target="_blank"><img src="resources/images/reseaux/logo_flickr_3.png" alt="logo flickr"/></a></a>
    <iframe style="position: relative; top: 0; left: 0; width: 100%; height: 100%;" src="https://flickrembed.com/cms_embed.php?source=flickr&layout=responsive&input=educap%20city&sort=2&by=keywords&theme=tilesgrid&scale=fill&speed=3000&limit=30&skin=default&autoplay=true" scrolling="no" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
    </iframe>
  </div>
</aside>
