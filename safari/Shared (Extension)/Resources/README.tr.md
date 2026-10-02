<div align="center">

<img src="assets/icon-source.png" alt="Bookmark Grove simgesi" width="160" />

# Bookmark Grove

**Kaydettiğiniz gönderileri klasörlü, aranabilir bir görünüme dönüştüren Safari eklentisi.**

Arama, yazarlara göre filtreleme, JSON dışa aktarma ve tüm sayfaları otomatik yükleme — hepsi tek bir şık arayüzde.

[English](README.md) · **Türkçe**

[Kurulum](#-kurulum) · [Özellikler](#-özellikler) · [Gizlilik](#-gizlilik)

</div>

---

## ⬇️ Kurulum

> Safari eklentisi macOS için Xcode projesi olarak sağlanır.

1. Depoyu indirin ve `safari/Bookmark Grove.xcodeproj` dosyasını Xcode'da açın.
2. **Bookmark Grove (macOS)** şemasını seçip uygulamayı çalıştırın.
3. Safari > Ayarlar > Eklentiler bölümünden **Bookmark Grove** eklentisini etkinleştirin.
4. `x.com` erişimine izin verin.
5. [x.com/i/bookmarks](https://x.com/i/bookmarks) sayfasını açın — yeni arayüz hazır! 🎉

## ✨ Özellikler

- 🧱 **Masonry grid** — yer işaretleri aya göre gruplanmış kartlar halinde
- 🔍 **Arama** ve **Yazarlar** sekmesiyle hızlı filtreleme
- ⏬ **Tümünü Yükle** — ayarlanabilir gecikmeyle tüm sayfaları otomatik çeker (varsayılan 3 sn)
- 🗑️ **Yer işaretinden çıkarma** — doğrudan kart üzerinden
- 📤 **JSON dışa aktarma** — verileriniz tamamen sizde
- 🗓️ **Dönem seçimi** — tweet tarihine göre son 7 gün, son 30 gün, özel tarih aralığı veya tüm arşivi dışa aktarın
- 💾 **Yerel arşiv** — çekilen kayıtlar tarayıcı kapansa da korunur
- ⚙️ **Ayarlar** — sayfalar arası bekleme süresi (1–60 sn)

## ⚙️ Ayarlar

Eklenti simgesine **sağ tık → Seçenekler**, veya yer işaretleri sayfasındaki **dişli simgesi**.

## JSON çıktısı

Her kayıt tweet bilgilerine ek olarak `bookmarkedAt` ve `lastSeenAt` alanlarını içerir.
`bookmarkedAt`, eklentinin kaydı ilk gördüğü zamandır ve haftalık/aylık işleme için kullanılır.

## 🔒 Gizlilik

Tüm veriler **yalnızca tarayıcınızda** işlenir; hiçbir veri harici bir sunucuya gönderilmez, analitik/telemetri kullanılmaz. Ayrıntılar: [PRIVACY.md](PRIVACY.md)

## 🧩 Proje yapısı

```
├── manifest.json
├── content/
│   ├── content.js    # Arayüz
│   ├── inject.js     # Yer işareti yanıtlarını yakalama
│   ├── parser.js
│   └── styles.css
├── options/          # Ayarlar sayfası
├── icons/            # Eklenti ikonları
└── assets/           # Tanıtım görselleri
```

## 📄 Lisans

MIT
