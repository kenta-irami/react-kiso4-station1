import React from "react";
import "./PersonalIntro.css";
import profileImage from "./assets/profile.jpg";
import { FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const PersonalIntro: React.FC = () => {
  return (
    <div className="personal-intro">
      <div className="header">
        <img src={profileImage} alt="プロフィール画像" className="user-icon" />
        <h1>イラケン</h1>
      </div>
      <p className="occupation">Webページ、ホームページ制作</p>

      <p className="description">
        ノマドワーカーとして自由に生きることが夢です。
        <br />
        スキルを身につけることと同時に、人間的にも成長していきます。
      </p>

      <div className="skills">
        <span className="skill-tag">
          <FaWordpress /> Wordpress
        </span>
        <span className="skill-tag">
          <FaHtml5 /> HTML
        </span>
        <span className="skill-tag">
          <FaCss3Alt /> CSS
        </span>
        <span className="skill-tag">
          <FaJs /> JavaScript
        </span>
        <span className="skill-tag">
          <FaReact /> React
        </span>
      </div>
    </div>
  );
};

export default PersonalIntro;
