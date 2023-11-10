# Paribu-Hub-Smart-Contract-Solidity-Bootcamp_Final-Projesi

## Proje Açıklaması

(Solidity kontratı contracts klosörünün içinde)

### Proje Hedefi


Bu proje, bir kira yönetim sistemi oluşturmayı amaçlar. Sistem, kiracıların mülkleri kiralayabileceği ve mülk sahiplerinin kiracıları yönetebileceği bir platform sağlar.


### Adımlar


### Kullanıcı Yönetimi:


 Kiracı ve mülk sahibi olmak üzere iki farklı tip kullanıcı oluşturulacak. 
 Her kullanıcı için gerekli bilgiler alınarak profilleri oluşturulacak. 

### Mülk Bilgileri Tanımlama:


 Her kullanıcı mülkleri hakkında bilgi verebilir ve mülklerin özelliklerini tanımlayabilir. 

### Sözleşme Yönetimi:


 Kiracılar, mülkleri seçebilir ve başlangıç ile bitiş tarihlerini girerek sözleşmeler başlatabilir. 
 Erken tarihli sözleşmelerin sonlandırılması talepleri alınır ve onay bekler. 
 Kiracılar, erken tarihli sözleşmeleri sonlandırma talebinde bulunabilecek ve bu durumda sözleşmede herhangi bir işlem yapılmayacak. 
 Sözleşmelerin sonlandırılması için kiracılar ve mülk sahiplerinin onayı gerekmektedir. 

### Şikayet Yönetimi:


 Kiracılar ve mülk sahipleri, sistemde şikayette bulunabilir. 
 Tüm şikayetler kaydedilmelidir. 

### Yetki Kontrolleri:


 Aynı kullanıcının hem kiracı hem de mülk sahibi olması engellenmelidir. 
 Kullanıcılar sadece yetki ve rolleri doğrultusunda işlem yapabilirler. 