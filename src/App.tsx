import { ReactElement } from 'react';
import AppHeader from "./layouts/AppHeader";
import AppLayout from "./layouts/AppLayout";
import CardsList from './layouts/CardsList';
import { NewCardContextProvider } from './context/NewCardContext';
import "./App.css";
import NewCard from './layouts/NewCard';
import { CardsContextProvider } from './context/CardsContext';

export default function App():ReactElement {

  return (
    <AppLayout>
      <NewCardContextProvider>
        <AppHeader />
        <CardsContextProvider>
          <CardsList>
            <NewCard />
          </CardsList>
        </CardsContextProvider>
      </NewCardContextProvider>
    </AppLayout>
  );
}