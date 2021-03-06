import Header from "./Header";
import Hero from "./Hero";
import Circles from "./Circles";
import Overview from "./Overview";
import About from "./About";
import WhatYouWillLearn from "./what-you-will-learn/WhatYouWillLearn";
import WhatWeWillBuild from "./WhatWeWillBuild";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";
import Videos from "./Videos";

function App() {
  return (
    <div className="text-gray-700">
      <div className="my-header-nav-section">
        <Circles
          classes={[
            "top-0 left-0",
            "transform -translate-x-10 -translate-y-10",
            "lg:translate-x-4 lg:translate-y-4",
          ]}
        />
        <Circles
          classes={[
            "top-0 right-0",
            "mr-48",
            "transform -translate-x-64 translate-y-64",
            "hidden lg:block",
          ]}
        />

        <Header />
        <Hero />
      </div>

      <Overview />

      <About />

      <WhatYouWillLearn />

      <WhatWeWillBuild />

      <Pricing />

      <Videos />

      <Faq />

      <Footer />
    </div>
  );
}

export default App;
