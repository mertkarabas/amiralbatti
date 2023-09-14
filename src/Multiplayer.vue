
<template>
<div>
  <router-link to="/"> <button id=anasayfayadön  type="button"><i class="fa-solid fa-backward"></i></button></router-link>
<div id="girişkısmımultiplayer">
  <div id="kurallarbaslık">
    <p>KURALLAR</p>
  </div>

  <div id="kurallardetay">
    <ul id="kurallar">
      <li class="kurallar">İlk Öncelikle Oyuna Başla Butonuna Basıp Oyuna Giriş Yapın.</li>
      <li class="kurallar">Oyun Başladıktan Sonra Altta Bulunan Mavi Blokları Birinci Tabloya Yerleştirin.</li>
      <li class="kurallar">Birinci Tablo Sizin Tablonuz(Haritanız) Mavi Bloklar ise Sizin Gemileriniz.</li>
      <li class="kurallar">İkinci Tablo Bilgisayarın Tablosu ve o Tablonun içinde Bizim Göremediğimiz Gemileri Mevcut.</li>
      <li class="kurallar"> Her İki Oyuncununda Toplamda 5 Gemisi Mevcuttur.</li>
      <li class="kurallar">Gemilerinizi Yerleştirirken Üst Üste Koymamaya Özen Gösteriniz. </li>
      <li class="kurallar">Gemilerinizi Yerleştirdikten Sonra Start Butonuna Basarak Oyunu Başlatabilirsiniz.</li>
      <li class="kurallar">Oyun Başladıktan Sonra Karşı Rakibin Bloklarına Tıklayarak Gemilerine Atış Yapıp Vurabilirsiniz.</li>
      <li class="kurallar">Siz Karşı Tarafa Atış Yaptığınızda(Mouse ile tıkladığınızda) O da Size Anında Atış Yapacaktır.</li>
      <li class="kurallar">Atıştan Sonra Blok Sarı Yanarsa Orada Gemi Yoktur ama Atıştan Sonra Blok Kırmızı Yanarsa Ordaki Gemiyi Batırmışsınız Demektir.</li>
      <li class="kurallar">Eğer Pes Etmek ya da Oyunu Bitirmek İstiyorsanız Endgame Butonuna Basıp Çekilebilirsiniz Oyunu Kaybedersiniz.</li>
      <li class="kurallar">Endgame(Oyunu Bitir) Butonuna Basıp Oyunu Bitirdiğinizde Rakibin Tüm Gemilerini Vurduysanız(Kırmızı Olduysa bilgisayarın 5 Bloğuda) Oyunu Kazanırsınız.</li>
      <li class="kurallar">Endgame(Oyunu Bitir) Butonuna Basıp Oyunu Bitirdiğinizde Rakip Sizin Tüm Gemilerinizi Vurmuşsa(Kırmızı Olduysa sizin 5 Bloğunuzda) Oyunu Kaybedersiniz.</li>
      <li class="kurallar">!!!!! BAZEN BLOĞA BASTIĞINIZDA YARISI SARI YANABİLİR O BLOĞUN TEKRAR SOL KÖŞE TARAFINA BASIN KIRMIZIYA DÖNECEKTİR!!!!!</li>
      <li class="kurallar">!!!!! BİR SORUNLA KARŞILAŞIRSANIZ ANASAYFAYA GİDİP TEKRAR GİRİNİZ NADİR DE OLSA HATALAR OLABİLİYOR!!!!!</li>
    </ul>
  </div>
</div>
</div>
</template>

<script>
export default{}
</script>



<style>
#girişkısmımultiplayer{
  height: 1200px;
  width: 50%;
  background-color: red;
  margin-top: 50px;
  border-radius: 10px;
  margin-left:350px;
}
#kurallarbaslık {
  height: 10%;
  margin-left: 160px;
  width: 100%;
  font-family: 'Inconsolata', monospace;
  font-family: 'Press Start 2P', cursive;
  font-size: 50px;
  padding-top:10px;
}
#kurallardetay{
  height: 90%;
  width:100%;
  margin-top:0;
  font-family: 'Inconsolata', monospace;
  font-family: 'Press Start 2P', cursive;
  padding-top:0;
}
.kurallar{padding:7px;

}

</style>
