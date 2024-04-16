
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageRoute from './routes/HomePage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePageRoute />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}