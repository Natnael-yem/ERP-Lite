import { useState } from 'react'
import { Toaster } from "react-hot-toast";
import { FrappeProvider } from 'frappe-react-sdk'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/ui/Header"
import Home from "./pages/Home"
import Login from './pages/Login';
import Register from './pages/Register';
import DashHeader from "./components/ui/DashHeader"
import SiteCreationWizard from './pages/SiteCreationWizard';
import Sites from './pages/Sites';
import Billing from './pages/Billing';
import Dashboard from './pages/Dashboard';

function App() {
	const [count, setCount] = useState(0)
	const [lang, setLang] = useState(localStorage.getItem('Language') || 'English');

	return (
		<div className="App">
			<FrappeProvider>
				<BrowserRouter basename="/press">
					<Routes>
						<Route index path="/login" element={<Login />} />
						<Route index path="/register" element={<Register />} />
						<Route element={<Header setLang={setLang} lang={lang} />}>
							<Route index element={<Home />} />
							{/* <Route index path="/news" element={<News />} /> */}
							{/* <Route index path="/vacancy" element={<Vacancy />} /> */}
							{/* <Route index path="/search" element={<Search />} /> */}
						</Route>
						<Route element={<DashHeader />}>
							{/* <Route index path="/appointment" element={<Appointment />} /> */}
							{/* <Route index path="/payment/:id" element={<Payment />} /> */}
							{/* <Route index path="/feedback" element={<Feedback />} /> */}
							<Route index path="/site-creation-wizard" element={<SiteCreationWizard />} />
							<Route index path="/dashboard" element={<Dashboard />} />
							<Route index path="/sites" element={<Sites />} />
							<Route index path="/billing" element={<Billing />} />
						</Route>
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					containerStyle={{ marginTop: '78px' }}
					toastOptions={{
						success: {
							duration: 5000,
							iconTheme: {
								primary: '#2BA0AF',
								secondary: '#ffffff',
							},
						},
						error: {
							duration: 5000,
						},
						style: {
							fontSize: '16px',
							maxWidth: '500px',
							padding: '16px 24px',
							color: 'var(--color-grey-700)',
						},
					}}
				/>
			</FrappeProvider>
		</div>
	)
}

export default App
