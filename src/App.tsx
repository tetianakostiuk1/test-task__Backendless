import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import tabsData from './tabs.json';
import { Tab } from "./types/Tab";
import TabsNav from "./components/TabsNav/TabsNav";
import LazyComponentLoader from "./components/LazyComponentLoader";

export const App: FC = () => {
  return (
      <Router>
        <TabsNav tabs={tabsData} />

        <Routes>
          {tabsData.map((tab: Tab) => (
              <Route
                  key={tab.id}
                  path={tab.id}
                  element={<LazyComponentLoader path={tab.path} />}
              />
          ))}

          <Route
              path="/*"
              element={<Navigate to={tabsData[0].id} />}
          />
        </Routes>
      </Router>
  );
}