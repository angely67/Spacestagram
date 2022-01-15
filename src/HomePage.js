import '@shopify/polaris/build/esm/styles.css';
import {Page} from '@shopify/polaris';
import TopBar from './components/TopBar';
import React, {useEffect, useState} from "react";
import ImageCardLists from "./components/ImageCardLists";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import "./HomePage.css";

function App() {
  const [postWidth, setPostWidth] = useState(window.innerWidth/2);

  useEffect(() => {
    function handleResize() {
      var threshold = window.innerHeight-100; //So the image can fit in one page
      if(window.innerWidth <= threshold){
        console.log(window.innerWidth);
        setPostWidth(window.innerWidth);
      }
      //If the window is too big
      else {
        setPostWidth(Math.min(window.innerWidth/2, threshold));
      }
      
    }
    window.addEventListener('resize', handleResize);
    handleResize();
})

  return (
    <AppProvider i18n={enTranslations}>
      <TopBar />
      <Page>
        <ImageCardLists maxWidth={postWidth} />
      </Page>
    </AppProvider>
  );
}

export default App;
