import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css';
import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import Shelf from './pages/shelf/shelf'; 
import Book from './components/books/books';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path= "/book" element ={<Book />}/>
          </Route>
          <Route path= "/shelf" element = {<Shelf/>}/>
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
  </AppProvider>
);

