import React, { ReactElement } from 'react';
import AppHeader from "./layouts/AppHeader";
import AppLayout from "./layouts/AppLayout";

import "./App.css";
import NewCard from './layouts/NewCard';

export default function App():ReactElement {
  return (
    <AppLayout>
      <AppHeader />
      <NewCard />
    </AppLayout>
  );
}