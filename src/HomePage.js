import '@shopify/polaris/build/esm/styles.css';
import {Page} from '@shopify/polaris';
import TopBar from './components/TopBar';
import React, {useEffect, useState} from "react";
import ImageCardLists from "./components/ImageCardLists";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
//import ImageCard from "./components/ImageCard";

function App() {
  const [postWidth, setPostWidth] = useState(window.innerWidth/2);

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 500){
        setPostWidth(window.innerWidth);
      }
      else if(window.innerWidth/2 >= 500){
        setPostWidth(window.innerWidth/2);
      }
      else{
        setPostWidth(500);
      }
      
    }
    window.addEventListener('resize', handleResize);
})

  return (
    <AppProvider i18n={enTranslations}>
      <TopBar/>
      <Page>
        <ImageCardLists maxWidth={postWidth}/>
      </Page>
    </AppProvider>
  );
}

export default App;
