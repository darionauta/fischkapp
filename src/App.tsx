import React, { ReactElement } from 'react';
import AppHeader from "./layouts/AppHeader";
import AppLayout from "./layouts/AppLayout";

import "./App.css";

export default function App():ReactElement {
  return (
    <AppLayout>
      <AppHeader />
    </AppLayout>
  );
}