import React, { ReactElement } from 'react';
import AppHeader from "./layouts/AppHeader";
import AppLayout from "./layouts/AppLayout";
import CardsList from './layouts/CardsList';

import "./App.css";
import NewCard from './layouts/NewCard';
import Card from './layouts/Card';

export default function App():ReactElement {
  return (
    <AppLayout>
      <AppHeader />
      <CardsList>
        <NewCard />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsList>
    </AppLayout>
  );
}