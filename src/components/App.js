
import { useState,useEffect } from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from "./layouts/Header";
import ContactList from "./ContactList";
import MyLabel from './atoms/MyLabel';
import Content from './pages/Content';


function App() {
	return (
		<>
			<Header />
			<Content />
		</>
	)
}


export default App;
