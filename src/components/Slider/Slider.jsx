import React from "react";
import "./slider.css";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Slider = () => {
  return (
    <section className="slider">
      <article className="main-article article">
        <header className="slider-header">
          <h5>Haber</h5>
          <h2 >
            Amazon'da Fırsat Günleri Başladı! İşte Kaçırılmayacak İndirimlerle
            Alabileceğiniz 10 Teknolojik Ürün
          </h2>
          <ul className="slider-list">
            <li>Serhat Can</li>
            <li>
              <AiOutlineClockCircle className="clock-icon" />1 saat önce
            </li>
          </ul>
        </header>
      </article>
      <article className="other-article article second-article">
        <header className="slider-header">
          <h5>Haber</h5>
          <h2>
            Apple, Polisleri Çileden Çıkaran 'Kaza Sensörünün' Nasıl Çalıştığını
            Açıkladı
          </h2>
          <ul className="slider-list">
            <li>Serhat Can</li>
            <li>
              <AiOutlineClockCircle className="clock-icon" />2 saat önce
            </li>
          </ul>
        </header>
      </article>
      <div className="other-article">
        <article className="article third-article">
          <header className="slider-header">
            <h5>Haber</h5>
            <h2>
              Yeni 'Xbox' Modelinin Fotoğrafı İlk Kez Paylaşıldı: Bu Sefer
              Normal Oyun Konsolu Olmayacak!
            </h2>
            <ul className="slider-list">
              <li>Serhat Can</li>
              <li>
                <AiOutlineClockCircle className="clock-icon" />3 saat önce
              </li>
            </ul>
          </header>
        </article>
        <article className="article four-article">
          <header className="slider-header">
            <h5>Haber</h5>
            <h2>
              Dünyanın En Büyük Uçakları ve Şaşırtıcı Özellikleri: İçine 22 Tır
              Birden Sığanı Bile Var!
            </h2>
            <ul className="slider-list">
              <li>Serhat Can</li>
              <li>
                <AiOutlineClockCircle className="clock-icon" />4 saat önce
              </li>
            </ul>
          </header>
        </article>
      </div>
    </section>
  );
};
