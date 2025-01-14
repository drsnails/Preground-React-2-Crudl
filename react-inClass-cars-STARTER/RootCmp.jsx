import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { CarIndex } from "./pages/CarIndex.jsx"
import { Home } from "./pages/Home.jsx"
const { useState } = React


export function App() {

    const [page, setPage] = useState('home')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage} />

            <main className="main-layout">
                {page==='home' && <Home />}
                {page==='about' && <About />}
                {page==='cars' && <CarIndex />}
            </main>
        </section>
    )
} 