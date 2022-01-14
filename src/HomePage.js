import '@shopify/polaris/build/esm/styles.css';
import {Page} from '@shopify/polaris';
import TopBar from './components/TopBar';
import React from "react";
import ImageCardLists from "./components/ImageCardLists";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

function App() {

  return (
    <AppProvider i18n={enTranslations}>
    <TopBar />
  <Page>
    <ImageCardLists />
  </Page>
  </AppProvider>
  );
}

export default App;
