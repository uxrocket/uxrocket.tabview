UX Rocket TabView
==============

Tab görünümü oluşturmak için hazırlanmıştır, Butona tıklandığında tıklanan buton seçili hale gelir ve bağlı olduğu içeriği gösterir.

``` {.lang-markup}
<div class="tab-view">
    <div class="tab-view-buttons">
        <a class="tab-view-button current" href="#">Button 1</a>
        <a class="tab-view-button" href="#">Button 2</a>
    </div>
    <div class="tab-view-content current">
        content 1
    </div>
    <div class="tab-view-content">
        content 2
    </div>
</div>
```

### Notlar
Bir tabın açık gelmesi için buton'una ve içeriğine 'current' class'ı vermek yeterlidir. Buton elemanına role attribute'u eklenerek TabView'in Dış containerına class atayarak her tab için farklı görünüm sağlanabilir.
Tabların hover ile açılması isteniyorsa <div class="tab-view"> containerının yanına tab-view-hover eklenir.
Tabların toggle ile açılması isteniyorsa <div class="tab-view"> containerının yanına tab-view-toggle eklenmesi yeterlidir.

## Tanımlar
Property             | Default              | Açıklama
-------------------- | -------------------- | ------------------------------------------------------------------------
button               | .tab-view-button     | TabViewi tetikleyen buton elemanı.
content              | .tab-view-content    | Tetiklenen butonun içeriğinin tanımlandığı eleman
current              | .current             | Aktif olan tab elemanı için tanımlanan CSS classı.
toggleClass          | .tab-view-toggle     | Tabların ikinci tıklanışında açılan content alanını kapatır.
hoverClass           | .tab-view-hover      | Tabların üzerine gelindiğinde content alanını açar.
hashLink             | false                | URL'de hash kullanımını sağlar.

## Public Metodlar
Metod                              | Açıklama
---------------------------------- | -------------------------------------------------------
$.uxtabview                        | Bu method pluginin detayını görmenizi sağlar.
$.uxtabview.version                | Sayfaya eklenmiş pluginin versiyon numarasını gösterir.
$.uxtabview.settings               | Aktif pluginin ayarlarını gösterir.
