import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Layout } from "./Layout";
import { About } from "../pages/About";
import { Programs } from "../pages/Programs";
import { Uslugi } from "../pages/Uslugi";
import { Contacts } from "../pages/Сontacts";
import { Doctors } from "../pages/Doctors";
import { Blog } from "../pages/Blog";
import { ErrorPage } from "../pages/ErrorPage";
import { ControllingOrgan } from "../pages/about/ControllingOrgan";
import { Licenses } from "../pages/about/Licenses";
import { Documents } from "../pages/about/Documents";
import { OurPartners } from "../pages/about/OurPartners";
import { PravovyInformations } from "../pages/about/PravovyInformation";
import { DoctorSadovnikova } from "../pages/doctors/DoctorSadovnikova";
import { DoctorPetuhova } from "../pages/doctors/DoctorPetuhova";
import { DoctorShevchenko } from "../pages/doctors/DoctorShevchenko";
import { DoctorOstrouhova } from "../pages/doctors/DoctorOstrouhova";
import { ProgramOne } from "../pages/programs/ProgramOne";
import { ProgramThree } from "../pages/programs/ProgramThree";
import { ProgramTwo } from "../pages/programs/ProgramTwo";
import { DoctorNaDom } from "../pages/uslugi/DoctorNaDom";
import { Pediatr } from "../pages/uslugi/Pediatr";
import { MedicalCertificates } from "../pages/uslugi/MedicalCertificates";
import { MedicinskayaSpravka079u } from "../pages/uslugi/medicalcertificates/MedicinskayaSpravka079u";
import { SanatornoKurortnayaKarta } from "../pages/uslugi/medicalcertificates/SanatornoKurortnayaKarta";
import { SpravkaForma026u } from "../pages/uslugi/medicalcertificates/SpravkaForma026u";
import { SpravkavBassein } from "../pages/uslugi/medicalcertificates/SpravkavBassein";
import { SpravkavDetskiiSad } from "../pages/uslugi/medicalcertificates/SpravkavDetskiiSad";
import { SpravkavShkolu } from "../pages/uslugi/medicalcertificates/SpravkavShkolu";
import { SpravkavZdorove } from "../pages/uslugi/medicalcertificates/SpravkaZdorove";
import { Post1 } from "../pages/posts/Post1";
import { Post2 } from "../pages/posts/Post2";
import { Post3 } from "../pages/posts/Post3";
import { Post4 } from "../pages/posts/Post4";
import { Post5 } from "../pages/posts/Post5";
import { Vacancies } from "../pages/about/Vacancies";
import { ForPatients } from "../pages/ForPatients";
import { LekarstvennoeObespechenie } from "../pages/forpatients/LekarstvennoeObespechenie";
import { PravilaPodgotovkiIssledovaniyam } from "../pages/forpatients/PravilaPodgotovki";
import { SvedeniyaSpecialistah } from "../pages/forpatients/SvedeniyaSpecialistah";
import { SposobyOplaty } from "../pages/forpatients/SposobyOplaty";
import { Otzyvy } from "../pages/forpatients/Otzyvy";
import { Prices } from "../pages/forpatients/Prices";

export const routesMain = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        breadcrumb: "Главная",
      },
      {
        path: "o-nas",
        breadcrumb: "О нас",
        children: [
          {
            index: true,
            Component: About,
          },
          {
            path: "kontroliruyushie-organizacii/",
            Component: ControllingOrgan,
            breadcrumb: "Контролирующие организации",
          },
          { path: "licenzii/", Component: Licenses, breadcrumb: "Лицензии" },
          {
            path: "documents/",
            Component: Documents,
            breadcrumb: "Документы",
          },
          {
            path: "nashi-partnery/",
            Component: OurPartners,
            breadcrumb: "Наши партнеры",
          },
          {
            path: "pravovaya-informaciya/",
            Component: PravovyInformations,
            breadcrumb: "Правовая информация",
          },
          {
            path: "vacancies/",
            Component: Vacancies,
            breadcrumb: "Вакансии",
          },
        ],
      },
      {
        path: "/doctors/",
        breadcrumb: "Педиатры",
        children: [
          { index: true, Component: Doctors },
          {
            path: "sadovnikova-elena-gennadevna/",
            Component: DoctorSadovnikova,
            breadcrumb: "Садовникова Елена Геннадьевна",
          },
          {
            path: "petuhova-olga-viktorovna/",
            Component: DoctorPetuhova,
            breadcrumb: "Петухова Ольга Викторовна",
          },
          {
            path: "shevchenko-anastasiya-nikolaevna/",
            Component: DoctorShevchenko,
            breadcrumb: "Шевченко Анастасия Николаевна",
          },
          {
            path: "ostrouhova-natalya-petrovna/",
            Component: DoctorOstrouhova,
            breadcrumb: "Остроухова Наталья Петровна",
          },
        ],
      },
      {
        path: "/programmy-nablyudeniya-za-zdorovem/",
        breadcrumb: "Программы",
        children: [
          {
            index: true,
            Component: Programs,
          },
          {
            path: "malysh-houm-standart-ot-0-do-2-h-le/",
            Component: ProgramOne,
            breadcrumb: "Малыш Хоум стандарт",
          },
          {
            path: "zdorovyj-rebenok-houm-standart-ot-2/",
            Component: ProgramTwo,
            breadcrumb: "Здоровый ребенок",
          },
          {
            path: "zdorovyj-rebenok-houm-midi-ot-2-h-l/",
            Component: ProgramThree,
            breadcrumb: "Педиатр рядом",
          },
        ],
      },
      {
        path: "/uslugi-i-ceny/",
        breadcrumb: "Услуги",
        children: [
          { index: true, Component: Uslugi },
          {
            path: "vyzov-pediatra-na-dom/",
            Component: DoctorNaDom,
            breadcrumb: "Врач на дом",
          },
          { path: "pediatr/", Component: Pediatr, breadcrumb: "Педиатр" },
          {
            path: "medicinskie-spravki-rebenku/",
            children: [
              {
                index: true,
                Component: MedicalCertificates,
                breadcrumb: "Справки",
              },
              {
                path: "sanatorno-kurortnaya-karta-dlya-det/",
                Component: SanatornoKurortnayaKarta,
                breadcrumb: "Санаторно-куротная карта",
              },
              {
                path: "spravka-v-shkolu/",
                Component: SpravkavShkolu,
                breadcrumb: "Справка в школу",
              },
              {
                path: "spravka-v-detskii-sad/",
                Component: SpravkavDetskiiSad,
                breadcrumb: "Справка в сад",
              },
              {
                path: "spravka-v-bassein/",
                Component: SpravkavBassein,
                breadcrumb: "Справка в бассейн",
              },
              {
                path: "spravka-o-sostoyanii-zdorovya-reben/",
                Component: SpravkavZdorove,
                breadcrumb: "Справка о состоянии здоровья",
              },
              {
                path: "spravka-poforme-026-u/",
                Component: SpravkaForma026u,
                breadcrumb: "Справка - 029у",
              },
              {
                path: "spravka-po-forme-079-u/",
                Component: MedicinskayaSpravka079u,
                breadcrumb: "Справка в лагерь - 079у",
              },
            ],
          },
        ],
      },
      {
        path: "/pacientam/",
        breadcrumb: "Пациентам",
        children: [
          { index: true, Component: ForPatients },
          { path: "prices/", Component: Prices, breadcrumb: "Цены" },
          {
            path: "lekarstvennoe-obespechenie/",
            Component: LekarstvennoeObespechenie,
            breadcrumb: "Лекарственное обеспечение",
          },
          {
            path: "pravila-podgotovki/",
            Component: PravilaPodgotovkiIssledovaniyam,
            breadcrumb: "Правила подготовки к исследованиям",
          },
          {
            path: "svedeniya-o-specialistah/",
            Component: SvedeniyaSpecialistah,
            breadcrumb: "Сведения о специалистах",
          },
          {
            path: "sposoby-oplaty/",
            Component: SposobyOplaty,
            breadcrumb: "Способы оплаты",
          },
          {
            path: "otzyvy/",
            Component: Otzyvy,
            breadcrumb: "Отзывы",
          },
        ],
      },
      {
        path: "/blog/",
        breadcrumb: "Блог",
        children: [
          { index: true, Component: Blog },
          {
            path: "detskij-nevrolog-na-dom/",
            Component: Post1,
            breadcrumb: "Детский невролог",
          },
          {
            path: "kalendar-vakcinacija/",
            Component: Post2,
            breadcrumb: "Календарь вакцинаций",
          },
          {
            path: "detskij-hirurg-na-dom/",
            Component: Post3,
            breadcrumb: "Детский хирург",
          },
          {
            path: "patronaj_novorojdennogo/",
            Component: Post4,
            breadcrumb: "Патронаж новорожденного",
          },
          {
            path: "adaptaciya_k_detskomu_sadu/",
            Component: Post5,
            breadcrumb: "Адаптация в детском саду",
          },
        ],
      },
      { path: "/kontakty/", Component: Contacts, breadcrumb: "Контакты" },
      { path: "*", Component: ErrorPage },
    ],
  },
];

const routes = createBrowserRouter(routesMain);
export default routes;
