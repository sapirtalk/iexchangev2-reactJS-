import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import UserForm from './components/userForm/UserForm';
import './App.css';
import SlideShow from './components/slideShow/SlideShow';
import useStorageState from './Hooks/useStorageState';

function App() {
	const [ pageMove, setPageMove ] = useStorageState('pageMove', 'convertor');
	console.log(pageMove);

	return (
		<div className="App">
			<Navbar setPageMove={setPageMove} />
			{/* {pageMove === 'convertor' ? <Header /> : ''} */}
			<UserForm setPageMove={setPageMove} pageMove={pageMove} />
			{pageMove === 'convertor' ? (
				<div>
					<div className="App-slideShow">
						<SlideShow />
					</div>
				</div>
			) : (
				''
			)}
			<Footer />
			<script
				dangerouslySetInnerHTML={{
					__html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "cfpdpcji9w");`
				}}
			/>;
		</div>
	);
}

export default App;
