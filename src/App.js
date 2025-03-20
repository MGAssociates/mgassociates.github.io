import React from 'react';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/style.css';
import './styles/swiperCustomStyles.css';

function App() {
    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;