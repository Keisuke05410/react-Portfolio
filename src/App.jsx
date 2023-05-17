import "./App.css";
import React from "react";
import Card from "./card.jsx";
import p1png from "./assets/img/p1.png";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function App() {
  const p1png_text = `基本的なReactの知識を身につけるために作成したポートフォリオサイトです。\n気を付けたポイントはできるだけシンプルなデザインにして、Worksの部分でそれぞれの部分をコンポーネント化してコードを見やすくしました。`;
  return (
    <>
      <header className="text-grey-700 border-b">
        <div
          className="flex container mx-auto p-5 flex-col md:flex-row items-center justify-center
      "
        >
          <p className="font-bold text-xl mb-2 md:mb-0">
            Keisuke Kaji [Portforio]
          </p>
          <nav className="text-base font-medium md:ml-auto">
            <a href="#Home" className="mr-6 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#Works" className="mr-6 hover:text-blue-400 duration-300">
              Works
            </a>
            <a href="#About" className=" hover:text-blue-400 duration-300">
              About
            </a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700 h-96" id="Home">
        <div className="h-full w-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-4xl text-gray-900 font-medium text-center">
            Keisuke Kaji
          </h1>
          <p className="text-xl sm:text-2xl text-gray-900 text-center mt-1">
            Portforio
          </p>
        </div>
      </section>
      <section className="text-gray-700  bg-slate-100" id="Works">
        <h1 className="text-center text-4xl font-bold py-5">Works</h1>
        <div className="h-full flex mx-10 py-5">
          <Card
            img_path={p1png}
            title={"ポートフォリオサイト"}
            text={p1png_text}
            tags={["React", "Tailwind CSS"]}
          />
          <Card
            img_path={p1png}
            title={"ポートフォリオサイト"}
            text={p1png_text}
            tags={["React", "Tailwind CSS"]}
          />
        </div>
      </section>
      <section className="text-gray-700" id="About">
        <h1 className="text-center text-4xl font-bold py-5">About</h1>
        <div className="flex px-20 pt-10 pb-20">
          <div className="w-1/2 flex flex-col justify-center items-center px-10">
            <h2 className="font-bold text-4xl mb-10">経歴</h2>
            <p>神戸大学工学部電気電子工学科卒業</p>
            <p>神戸大学大学院工学研究科電気電子工学専攻</p>
            <p>知的学習論研究室所属</p>
            <h2 className="font-bold text-4xl my-10">Skills</h2>
            以下のスキルはすべて個人で学習したものです。
            <br />
            まだ理解が浅いのですが、インターンなどの経験を通して理解を深めていきたいと考えています。
            <p className="mt-10 px-5 py-5 border">
              Python, flask, React, Tailwind CSS, HTML&CSS
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center px-10">
            <div className="mx-5">
              <h2 className="font-bold text-4xl mb-10 text-center">自己紹介</h2>
              サイトを見ていただきありがとうございます。現在、M1の鍛冶佳佑です。
              <br />
              大学院の研究では機械学習における敵対的サンプルへの対処法を研究しています。
              <br />
              大学の研究や普段のweb開発、就職活動を通して具体的に将来したいことを考えています。
              <h2 className="font-bold text-4xl my-10 text-center">その他</h2>
              <div className="flex text-xl">
                <p className="my-auto">
                  <AiFillGithub />
                </p>
                <a href="https://github.com/Keisuke05410" className="underline">https://github.com/Keisuke05410</a>
              </div>
              <div className="flex text-xl">
                <p className="my-auto">
                  <AiOutlineMail />
                </p>
                <p>k.kaji2025@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
