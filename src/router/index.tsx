
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageRoute from './routes/HomePage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePageRoute />} />
            </Routes>
        </BrowserRouter>
    );
}