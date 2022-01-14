import '@shopify/polaris/build/esm/styles.css';
import {Page} from '@shopify/polaris';
import TopBar from './components/TopBar';
import React from "react";
import ImageCardLists from "./components/ImageCardLists";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
//import ImageCard from "./components/ImageCard";

function App() {

  return (
    <AppProvider i18n={enTranslations}>
    <TopBar />
  <Page>
   {/* <ImageCard img={{"date":"2008-12-28","explanation":"Rich star fields and glowing hydrogen gas silhouette dense, opaque clouds of interstellar gas and dust in this Hubble Space Telescope close-up of IC 2944, a bright star forming region in Centaurus, 5,900 light-years away. The largest of these dark globules, first spotted by South African astronomer A. D. Thackeray in 1950, is likely two separate but overlapping clouds, each more than one light-year wide. Combined the clouds contain material equivalent to about 15 times the mass of the Sun, but will they actually collapse to form massive stars? Along with other data, the sharp Hubble images indicate that Thackeray's globules are fractured and churning as a result of intense ultraviolet radiation from young, hot stars already energizing and heating the bright emission nebula. These and similar dark globules known to be associated with other star forming regions may ultimately be dissipated by their hostile environment -- like cosmic lumps of butter in a hot frying pan.   Note : APOD Editor to Speak in New York on Jan. 2  digg_url = 'http://apod.nasa.gov/apod/ap081228.html'; digg_skin = 'compact';","hdurl":"https://apod.nasa.gov/apod/image/0812/thackeray_hst_big.jpg","media_type":"image","service_version":"v1","title":"Thackeray's Globules","url":"https://apod.nasa.gov/apod/image/0812/thackeray_hst.jpg"}} />
  */}
  <ImageCardLists/>
  </Page>
  </AppProvider>
  );
}

export default App;
