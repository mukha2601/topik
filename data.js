/* icons for about component */
import icon1 from "/about-item (1).png";
import icon2 from "/about-item (2).png";
import icon3 from "/about-item (3).png";
import icon4 from "/about-item (4).png";
import icon5 from "/about-item (5).png";
import icon6 from "/about-item (6).png";
import opportunityImage from "/opportunityImage.png";
import courseImg1 from "/courses (1).png";
import courseImg2 from "/courses (2).png";
import courseImg3 from "/courses (3).png";

export default {
  hero: {
    title:
      "Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati",
    subtitle1: "3 oyda Koreys tilida gapirishni boshlang",
    subtitle2: "5 oyda Topikdan 6 darajagacha olishda yordam beramiz",
    subtitle3:
      "Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati",
    button: "bepul darsga yozilish",
    buttonSubtitle: "Birinchi darsga bepul yoziling!",
  },
  about: {
    title: "TOPIK academy aniq siz uchun agar siz",
    items: [
      {
        icon: icon1,
        description: "Qisqa muddat ichida Koreys tilida gapirishni istaysiz",
      },
      {
        icon: icon2,
        description: "Koreys tili o’rganib o’z karyerangizni qurmoqchisiz",
      },
      {
        icon: icon3,
        description:
          "Topik sertifikatini olib Koreyaning nufuzli universitetlariga GRANT yutmoqchisiz",
      },
      {
        icon: icon4,
        description:
          "Janubiy Koreya davlatida o’qish va ishlash uchun ketmoqchisiz",
      },
      {
        icon: icon5,
        description:
          "Koreys tilini o’rta darajda bilasiz va darajangizni oshirmoqchisiz",
      },
      {
        icon: icon6,
        description: "Ko’p yillardan buyon o’qib ham natijaga chiqa olmayapsiz",
      },
    ],
    button: "ha, bu men",
  },
  results: {
    title: "O’quvchilarimizning natijalari TOPIK 6 gacha",
    button: "Ariza qoldirish",
  },
  opportunity: {
    title: "Koreya Universitetlariga 100% gacha grant yutish imkoniyati",
    img: opportunityImage,
    subtitle1: "GKS (Global Korean Scholarship) $70.000 lik Grant",
    description1:
      "Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy instituti tomonidan xorijiy talabalarning Koreyada bakalavr va magistratura bosqichida 100% gacha to’liq grantva oylik stipendiya olish imkoniyatingiz bor",
    subtitle2: "GKS granti sizga nima beradi",
    description2: [
      "Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.",
      "Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh dollari).",
      "Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi (faqat magistr va doktorantlarga)... ko’proq",
    ],
  },
  graduates: {
    title:
      "Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz",
    subtitle1:
      "TOPIK academy consulting jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi",
    subtitle2: "Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!",
    button: "ariza qoldirish",
  },
  courses: {
    title: "O’zingizga mos kursga ro’yxatdan o’ting",
    card: [
      {
        img: courseImg1,
        title: "Intiensive",
        duration: "Davomiyligi: 5 oy",
        description:
          "Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.",
        button: "ro'yhatdan o'tish",
        price: "970.000 so’m /oy",
      },
      {
        img: courseImg2,
        title: "Odatiy",
        duration: "Davomiyligi: 5 oy",
        description:
          "Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.",
        button: "ro'yhatdan o'tish",
        price: "560.000 so’m /oy",
      },
      {
        img: courseImg3,
        title: "Individual",
        duration: "Davomiyligi: 5 oy",
        description:
          "O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.",
        button: "ro'yhatdan o'tish",
        price: "1.800.000 so’m /oy",
      },
    ],
  },
};
