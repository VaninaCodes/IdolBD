import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { Navbar } from '../components/Navbar';
import { CharacterPage } from '../pages/CharacterPage';
// modificar
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/character" element={<CharacterPage />} />
            </Routes>
        </BrowserRouter>
    )
}