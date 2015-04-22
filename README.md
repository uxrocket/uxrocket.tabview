UX Rocket TabView
==============

Tab görünümü oluşturmak için hazırlanmıştır, Butona tıklandığında tıklanan buton seçili hale gelir ve bağlı olduğu içeriği gösterir.


<div class="example">
    <div class="tab-view">
        <div class="tab-view-buttons">
            <a class="tab-view-button current" href="#">Button 1</a>
            <a class="tab-view-button" href="#">Button 2</a>
        </div>
        <div class="tab-view-content current">
            <p>Don't underestimate the Force. Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money. What good is a reward if you ain't around to use it? Besides, attacking that battle station ain't my idea of courage. It's more like&hellip;suicide.</p>
            <ul>
                <li>Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.</li>
                <li>I call it luck.</li>
                <li>Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money.</li>
                <li>I need your help, Luke. She needs your help. I'm getting too old for this sort of thing.</li>
                <li>Partially, but it also obeys your commands.</li>
            </ul>
        </div>
        <div class="tab-view-content">
            <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. I'm surprised you had the courage to take the responsibility yourself. I'm trying not to, kid.</p>
            <p>All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!</p>
        </div>
    </div>
</div>

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

## Tanımlar {.table-heading}
Property {.property} | Default {.value}     | Açıklama
-------------------- | -------------------- | ------------------------------------------------------------------------
button               | .tab-view-button     | TabViewi tetikleyen buton elemanı.
content              | .tab-view-content    | Tetiklenen butonun içeriğinin tanımlandığı eleman
current              | current              | Aktif olan tab elemanı için tanımlanan CSS classı.

## Public Metodlar {.table-heading}
!--------------------------------- | -------------------------------------------------------
$.uxtabview              {.method} | Bu method pluginin detayını görmenizi sağlar.
$.uxtabview.version      {.method} | Sayfaya eklenmiş pluginin versiyon numarasını gösterir.
$.uxtabview.settings     {.method} | Aktif pluginin ayarlarını gösterir.