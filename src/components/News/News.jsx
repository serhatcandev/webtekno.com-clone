import React from "react";
import "./news.css";
import { MdNotes } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import Post1 from "../../images/post/news1.webp";

export const News = () => {
  return (
    <section className="news-section">
      <div className="news-wrapper">
        <h3 className="yayin-akisi">Yayın Akışı</h3>
        <div className="news">
          <div className="news-left">
            <MdNotes className="icon" />
            <span>1 saat önce</span>
          </div>
          <div className="news-right">
            <img src={Post1} alt="" className="img" />
          </div>
          <div className="news-content">
            <p className="news-tag">YAŞAM</p>
            <h2>
              Antarktika 'Drone Sürüleri' ile İncelenecek: Bölgeyi Kurtarmak
              İçin Önemli Veriler Toplanacak
            </h2>
            <div className="news-meta">
              <p className="news-author">
                Serhat Can <RiShareForwardLine className="arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="news-left">
            <MdNotes className="icon" />
            <span>1 saat önce</span>
          </div>
          <div className="news-right">
            <img src={Post1} alt="" className="img" />
          </div>
          <div className="news-content">
            <p className="news-tag">YAŞAM</p>
            <h2>
              Antarktika 'Drone Sürüleri' ile İncelenecek: Bölgeyi Kurtarmak
              İçin Önemli Veriler Toplanacak
            </h2>
            <div className="news-meta">
              <p className="news-author">
                Serhat Can <RiShareForwardLine className="arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="news-left">
            <MdNotes className="icon" />
            <span>1 saat önce</span>
          </div>
          <div className="news-right">
            <img src={Post1} alt="" className="img" />
          </div>
          <div className="news-content">
            <p className="news-tag">YAŞAM</p>
            <h2>
              Antarktika 'Drone Sürüleri' ile İncelenecek: Bölgeyi Kurtarmak
              İçin Önemli Veriler Toplanacak
            </h2>
            <div className="news-meta">
              <p className="news-author">
                Serhat Can <RiShareForwardLine className="arrow" />
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
