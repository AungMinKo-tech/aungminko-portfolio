import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProgrammingBasic from "../assets/basic.png";
import PwdOne from "../assets/pwd_1.jpg";
import PwdTwo from "../assets/pwd2.png";
import FullStack from "../assets/codelab.jpg";

const certificatesData = [
  {
    title: "Programming Basic Course",
    issuer: "Fairway Technology",
    image: ProgrammingBasic,
  },
  {
    title: "Professional Web Developer 1",
    issuer: "Fairway Technology",
    image: PwdOne,
  },
  {
    title: "Full-Stack Developer Course",
    issuer: "Code Lab",
    image: FullStack,
  },
  {
    title: "Professional Web Developer 2",
    issuer: "Fairway Technology",
    image: PwdTwo,
  },
];

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="bg-white p-4 border-r border-gray-200 shadow-inner"
      ref={ref}
    >
      <div className="h-full flex flex-col justify-center items-center border-4 border-double border-slate-200 p-4">
        {props.children}
      </div>
    </div>
  );
});

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 bg-slate-900 text-white overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-500 font-mono mb-4 text-lg">03.</span> My{" "}
        <span className="text-yellow-500">Certificates</span>
      </h2>

      <div className="flex justify-center items-center">
        {/* စာအုပ်အဖုံး (FlipBook Component) */}
        <HTMLFlipBook
          width={400} // စာမျက်နှာ တစ်ဖက်ရဲ့ အကျယ်
          height={550} // စာမျက်နှာရဲ့ အမြင့်
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.5} // စာရွက်လှန်ရင် ပေါ်မယ့် အရိပ်
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-2xl"
        >
          {/* မျက်နှာဖုံး (Cover Page) */}
          <Page number="1">
            <div className="text-center text-slate-800">
              <h3 className="text-2xl font-bold mb-4">MY ACHIEVEMENTS</h3>
              <p className="text-sm">
                Tap or drag to flip through my certificates.
              </p>
              <div className="mt-8 text-6xl text-blue-500">📜</div>
            </div>
          </Page>

          {/* Certificate စာမျက်နှာများ */}
          {certificatesData.map((cert, index) => (
            <Page number={index + 2} key={index}>
              <h3 className="text-xl font-bold text-slate-800 text-center mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">{cert.issuer}</p>
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain rounded-lg shadow-md mb-4 border"
              />
            </Page>
          ))}

          {/* နောက်ကျောဖုံး (Back Cover) */}
          <Page number={certificatesData.length + 2}>
            <div className="text-center text-slate-800 h-full flex items-center justify-center">
              <h3 className="text-xl font-bold">Thank You!</h3>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>
    </section>
  );
}

export default Certificates;
