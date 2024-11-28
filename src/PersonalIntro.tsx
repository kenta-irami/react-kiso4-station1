import React from "react";
import "./PersonalIntro.css"; // CSSファイルのインポート

const PersonalIntro: React.FC = () => {
  return (
    <div className="personal-intro">
      <h1>伊良皆 健太</h1>
      <p className="occupation">Web制作担当</p>

      <p className="description">
        Webライティング＆プログラミングスキルを身につけることが私の目標です。
        <br></br>常に新しいことを学び、成長し続けています。
      </p>

      <div className="skills">
        {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PersonalIntro;
