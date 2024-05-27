import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Form from './pages/Form.jsx';
import SuccessPage from './pages/Submit.jsx';
import NotFoundPage from './pages/404.jsx';

const router = createBrowserRouter(
	createRoutesFromElements([
		<Route
			path='/'
			element={<App />}
		>
			<Route
				path='/'
				element={<Form />}
			/>
			<Route
				path='/submitted'
				element={<SuccessPage />}
			/>
			<Route
				path='*'
				element={<NotFoundPage />}
			/>
		</Route>,
	])
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
