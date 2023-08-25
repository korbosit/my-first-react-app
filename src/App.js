import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// let SomeComponent = () => <Dialogs />;

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Routes>
            {/* Оберните компоненты Route внутри компонента Routes */}
            {/* <Route  path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} /> */}

				{/* <Route  path="/dialogs/*" render={() => <Dialogs /> } />
            <Route path="/profile" render={() => <Profile />} /> */}

				{/* <Route path="/dialogs/*" element={SomeComponent()} />
            <Route path="/profile" element={<Profile />} /> */}

				<Route path="/dialogs/*" element={<Dialogs  />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
