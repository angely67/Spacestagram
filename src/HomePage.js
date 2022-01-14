import '@shopify/polaris/build/esm/styles.css';
import {Page} from '@shopify/polaris';
import NavBar from './components/NavBar';
import React from "react";
import ImageCard from "./components/ImageCard";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

function App() {

  return (
      <AppProvider i18n={enTranslations}>
      <NavBar />
    <Page title="Example app">
      {/*<Card sectioned style={{width: "80%", margin: "0", padding: "0"}}>
       <img src="https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg" width={"100%"}/>
       {<Heart isClick={isClick} onClick={() => {
         setClick(!isClick);}
        } />}
      </Card>*/}
      <ImageCard ImgURL="https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg" MaxWidth="80%"/>
      <ImageCard ImgURL="https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg" MaxWidth="80%"/>
      <ImageCard ImgURL="https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg" MaxWidth="80%"/>
      <ImageCard ImgURL="https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg" MaxWidth="80%"/>
    </Page>
    </AppProvider>
  );
}

export default App;
