let blogAdd = document.querySelector(".blogAdd");
let examination = document.querySelector(".examination");
let motorsport = document.querySelector(".motorsport");
let technologyAndAutomobiles = document.querySelector(
  ".technologyAndAutomobiles"
);
let automobileMaintenance = document.querySelector(".automobileMaintenance");
let carCulture = document.querySelector(".carCulture");
let clearLocal = document.querySelector(".clearLocal");

let blogData = [];

if (typeof localStorage.blogData !== "undefined") {
  blogData = JSON.parse(localStorage.blogData);
  handleRender();
  addData.disabled = true; 
}
else {
  addData.disabled = false; 
}

handleRender();

addData.addEventListener("click", function () {
  blogData = [
    
    {
      baslik: "Ferrari 488 GTB: Hızın ve Zarafetin Buluşma Noktası",
      aciklama:
        "Ferrari 488 GTB'nin performansı, tasarımı ve özellikleri üzerine detaylı bir inceleme.",
      yazar: "Ahmet Yılmaz",
      kategori: "Otomobil İncelemeleri",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSDg_oWRdmHXx6Fi3Kd7X_juaBemqv8AJ-A&s",
    },
    {
      baslik: "Tesla Model S: Geleceğin Elektrikli Aracı",
      aciklama:
        "Tesla Model S'in elektrikli motoru, menzili ve teknolojik özellikleri hakkında kapsamlı bir yazı.",
      yazar: "Elif Kaya",
      kategori: "Otomobil İncelemeleri",
  
      gorsel: "https://cdn.motor1.com/images/mgl/ovGXb/s1/4x3/tesla-model-s.webp",
    },
    {
      baslik: "BMW M4: Spor Arabaların Yeni Standardı",
      aciklama:
        "BMW M4'ün performansı, sürüş deneyimi ve teknik özellikleri üzerine bir inceleme.",
      yazar: "Mehmet Demir",
      kategori: "Otomobil İncelemeleri",
  
      gorsel: "https://www.cumhuriyet.com.tr/Archive/2024/5/10/151202331-bmw-m4-cs-911zon.jpeg",
    },
    {
      baslik: "Porsche 911 Carrera: Efsanenin Yeniden Doğuşu",
      aciklama:
        "Porsche 911 Carrera'nın tarihçesi, modern özellikleri ve sürüş dinamikleri.",
      yazar: "Ayşe Akın",
      kategori: "Otomobil İncelemeleri",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mpeHLtxzjIxfHDg6PSKmkT942HIyoqnHkQ&s",
    },
    {
      baslik: "Audi R8: Yüksek Performansın Adı",
      aciklama:
        "Audi R8'in motor özellikleri, hızlanma performansı ve tasarım detayları.",
      yazar: "Canan Çelik",
      kategori: "Otomobil İncelemeleri",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BQihEfJK8LSfPdNpRJTUlEJxjVDrLWBI2A&s",
    },
    {
      baslik: "Formula 1'in Efsanevi Pilotları",
      aciklama:
        "Formula 1 tarihinde iz bırakan efsanevi pilotların kariyerleri ve başarıları.",
      yazar: "Burak Koç",
      kategori: "Motor Sporları",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0rtTsL5wFM9gMIlRWQjqh0opA3B6fiUvgu61y4NKr8AZD647TjaU22gxc4wyH76bnJY&usqp=CAU",
    },
    {
      baslik: "MotoGP'nin Heyecan Verici Dünyası",
      aciklama:
        "MotoGP yarışlarının dinamikleri, ünlü pilotları ve unutulmaz anları.",
      yazar: "Emine Şahin",
      kategori: "Motor Sporları",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprgWSZP9UR1kZGBnavVOuavz2rM5JqfEPoQ&s",
    },
    {
      baslik: "NASCAR: Amerika'nın Hız Tutkusu",
      aciklama: "NASCAR yarışlarının kökenleri, kuralları ve önemli yarışçıları.",
      yazar: "Serkan Uçar",
      kategori: "Motor Sporları",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC8FvT_TiKYASHs6xb4R0WMBP6WTtK3iPGw&s",
    },
    {
      baslik: "Dakar Rallisi: Dünyanın En Zorlu Yarışı",
      aciklama:
        "Dakar Rallisi'nin tarihçesi, zorlukları ve efsaneleşmiş yarışçıları.",
      yazar: "Ayhan Çelik",
      kategori: "Motor Sporları",
  
      gorsel: "https://img.redbull.com/images/c_crop,x_983,y_0,h_2133,w_1600/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/12/20/dslcubzaaerugucydu4c/dakar-2020",
    },
    {
      baslik: "Le Mans 24 Saat: Dayanıklılık Yarışlarının Zirvesi",
      aciklama:
        "Le Mans 24 Saat yarışının detayları, efsanevi anları ve kazananları.",
      yazar: "Buse Erdem",
      kategori: "Motor Sporları",
  
      gorsel: "https://www.apetpetrol.com/wp-content/uploads/2022/01/petrol-ofisi-texaco-madeni-yaglar-lemans24-yarislari-6.jpg",
    },
    {
      baslik: "Otonom Araçlar: Geleceğin Taşıma Teknolojisi",
      aciklama:
        "Otonom araçların gelişimi, avantajları ve gelecekteki potansiyeli.",
      yazar: "Melike Arslan",
      kategori: "Teknoloji ve Otomobiller",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_mv2MqY7gRydJiS6Ax9xwYC_34WxvFSDxA&s",
    },
    {
      baslik: "Elektrikli Arabaların Yükselişi",
      aciklama:
        "Elektrikli araçların tarihçesi, teknolojisi ve çevresel etkileri.",
      yazar: "Kemal Yıldız",
      kategori: "Teknoloji ve Otomobiller",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V9uVlYYocpk7c5IlqyGC4iIdmLqPwEeEEQ&s",
    },
    {
      baslik: "Hibrit Arabalar: Geçiş Döneminin Teknolojisi",
      aciklama:
        "Hibrit araçların çalışma prensipleri, avantajları ve dezavantajları.",
      yazar: "Funda Demir",
      kategori: "Teknoloji ve Otomobiller",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHZWT3AfHEiyIdmzda_gtAaZ_Qe2jVoG5xg&s",
    },
    {
      baslik: "Otomotiv Sektöründe Yapay Zeka",
      aciklama:
        "Yapay zekanın otomotiv sektöründeki uygulamaları ve gelecekteki yenilikler.",
      yazar: "Mustafa Öz",
      kategori: "Teknoloji ve Otomobiller",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5dd7MQhprBiRuF8Z-E_1hyfsnMveTLG8ag&s",
    },
    {
      baslik: "Bağlantılı Araçlar ve IoT",
      aciklama:
        "Bağlantılı araçların ve IoT teknolojilerinin otomotiv sektörüne etkileri.",
      yazar: "Zeynep Kaya",
      kategori: "Teknoloji ve Otomobiller",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBCqg8S74XO_GdC2jyzsdKF-0qb0LX1eF3g&s",
    },
    {
      baslik: "Araba Bakımının Püf Noktaları",
      aciklama: "Arabanızın ömrünü uzatacak bakım ipuçları ve püf noktaları.",
      yazar: "Selin Aydın",
      kategori: "Otomobil Bakımı",
  
      gorsel: "https://www.ajans24sigorta.com.tr/upload/uploadEditor/images/yeni-araba-alanlar-cin-10-temel-arac-bakimi-puclari-1.jpg",
    },
    {
      baslik: "Motor Yağı Seçimi Nasıl Yapılmalı?",
      aciklama:
        "Motor yağı seçerken dikkat edilmesi gerekenler ve en iyi seçenekler.",
      yazar: "Ali Kurt",
      kategori: "Otomobil Bakımı",
  
      gorsel: "https://www.technopat.net/sosyal/eklenti/motor-yaglari-arasindaki-farklar_9195978-9460_640x360-jpg.378570/",
    },
    {
      baslik: "Lastik Bakımı ve Değişimi",
      aciklama:
        "Lastiklerin bakımının nasıl yapılacağı ve ne zaman değiştirilmeleri gerektiği.",
      yazar: "Cem Tan",
      kategori: "Otomobil Bakımı",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCkEneaAv-Q_LVtiwkUW3KmWehIvopQCJtg&s",
    },
    {
      baslik: "Araba Boyası Koruma Yöntemleri",
      aciklama: "Araba boyasını korumanın yolları ve en etkili yöntemler.",
      yazar: "Ezgi Sarı",
      kategori: "Otomobil Bakımı",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFgD6RQwASk3yVXa31v6wrGFtdTpRi5nA8A&s",
    },
    {
      baslik: "Kışın Araç Bakımı",
      aciklama:
        "Kış aylarında aracınızın nasıl bakılması gerektiği ve dikkat edilmesi gereken noktalar.",
      yazar: "Can Uzun",
      kategori: "Otomobil Bakımı",
  
      gorsel: "https://d.ereglimetro.com.tr/news/22630.jpg",
    },
    {
      baslik: "Modifiye Araç Kültürü: Tutkudan Fazlası",
      aciklama:
        "Modifiye araçların tarihi, kültürel etkisi ve bu tutkunun ardındaki nedenler.",
      yazar: "Deniz Yılmaz",
      kategori: "Otomobil Kültürü",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31qwAtOxfSNpfR3LHLJcCj_IOfk8xvqPn-Q&s",
    },
    {
      baslik: "Klasik Otomobil Koleksiyonculuğu",
      aciklama:
        "Klasik otomobillerin değeri, koleksiyon yapmanın incelikleri ve önemli modeller.",
      yazar: "Esra Tan",
      kategori: "Otomobil Kültürü",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHdnUbLfykdWJE51od8gPvo3FbUtAWHV4kg&s",
    },
    {
      baslik: "Araba Festivalleri ve Etkinlikleri",
      aciklama:
        "Dünyanın dört bir yanındaki ünlü araba festivalleri ve etkinlikleri.",
      yazar: "Murat Kaya",
      kategori: "Otomobil Kültürü",
  
      gorsel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAdIbMBJod7oDsGb2-7EVosFxrQyaGUeQpQ&s",
    },
    {
      baslik: "Otomobil Sineması: Beyaz Perdedeki Efsane Arabalar",
      aciklama: "Sinema tarihinde iz bırakan efsanevi arabalar ve filmler.",
      yazar: "Gizem Demir",
      kategori: "Otomobil Kültürü",
  
      gorsel: "https://img-s1.onedio.com/id-56393bbefb5f354e6e69b21c/rev-0/w-600/h-436/f-jpg/s-dd9b6aebef21cf62fb4afa663072922648c7b474.jpg",
    },
    {
      baslik: "Drift Kültürü: Kontrol Edilen Kaos",
      aciklama:
        "Drift yarışlarının kökenleri, teknikleri ve bu sporun arkasındaki kültür.",
      yazar: "Hakan Güler",
      kategori: "Otomobil Kültürü",
  
      gorsel: "https://i0.wp.com/oguzhancakmak.com.tr/wp-content/uploads/2017/02/47861159-drift-wallpaper.jpg?ssl=1",
    },
    ...blogData
  ];

  save();

  handleRender();
  addData.disabled = true;
});

function handleRender() {
  examination.innerHTML = "";
  motorsport.innerHTML = "";
  technologyAndAutomobiles.innerHTML = "";
  automobileMaintenance.innerHTML = "";
  carCulture.innerHTML = "";
  for (let i = 0; i < blogData.length; i++) {
    if (blogData[i].kategori === "Otomobil İncelemeleri") {
      examination.innerHTML += `<div class="blogBox">
      <h2>${blogData[i].baslik}</h2>
      <p>${blogData[i].aciklama}</p>
      <div class = "text">
      <h5>Yazar: ${blogData[i].yazar}</h5>
      <img src="${blogData[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (blogData[i].kategori === "Motor Sporları") {
      motorsport.innerHTML += `<div class="blogBox">
     <div class = "tittle">
      <h2>${blogData[i].baslik}</h2>
      <p>${blogData[i].aciklama}</p>
      </div>
      <div class = "text">
      <h5>Yazar: ${blogData[i].yazar}</h5>
      <img src="${blogData[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (blogData[i].kategori === "Teknoloji ve Otomobiller") {
      technologyAndAutomobiles.innerHTML += `<div class="blogBox">
     <div class = "tittle">
      <h2>${blogData[i].baslik}</h2>
      <p>${blogData[i].aciklama}</p>
      </div>
      <div class = "text">
      <h5>Yazar: ${blogData[i].yazar}</h5>
      <img src="${blogData[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (blogData[i].kategori === "Otomobil Bakımı") {
      automobileMaintenance.innerHTML += `<div class="blogBox">
     <div class = "tittle">
      <h2>${blogData[i].baslik}</h2>
      <p>${blogData[i].aciklama}</p>
      </div>
      <div class = "text">
      <h5>Yazar: ${blogData[i].yazar}</h5>
      <img src="${blogData[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    } else if (blogData[i].kategori === "Otomobil Kültürü") {
      carCulture.innerHTML += `<div class="blogBox">
     <div class = "tittle">
      <h2>${blogData[i].baslik}</h2>
      <p>${blogData[i].aciklama}</p>
      </div>
      <div class = "text">
      <h5>Yazar: ${blogData[i].yazar}</h5>
      <img src="${blogData[i].gorsel}" alt="" />
      </div>
      </div>
  `;
    }
  }
}

function handleAddBlog(e) {
  e.preventDefault();
  let formData = new FormData(blogAdd);
  let formObj = Object.fromEntries(formData);

  blogData.push({
    baslik: formObj.tittle,
    aciklama: formObj.explanation,
    yazar: formObj.authorInformation,
    kategori: formObj.category,
    gorsel: formObj.image,
  });
  handleRender();
  save();
  blogAdd.reset();
}

blogAdd.addEventListener("submit", handleAddBlog);

function save() {
  localStorage.blogData = JSON.stringify(blogData);
}

function handleClear() {
  localStorage.clear();
  examination.innerHTML = "";
  motorsport.innerHTML = "";
  technologyAndAutomobiles.innerHTML = "";
  automobileMaintenance.innerHTML = "";
  carCulture.innerHTML = "";
  blogData = [];
  handleRender();
  blogAdd.reset();
  addData.disabled = false;
}

clearLocal.addEventListener("click", handleClear);
