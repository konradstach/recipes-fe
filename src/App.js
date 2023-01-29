import './App.css';
import Layout from "./components/ui/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipesPage from "./pages/RecipesPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import RecipeFullPage from "./pages/RecipeFullPage";
import {AnimatePresence} from 'framer-motion';

function App() {
    const location = useLocation();
    return <div>
        <Layout>
            <AnimatePresence>

                <Routes location={location} key={location.pathname}>
                    <Route path='/shoppingList' element={<ShoppingListPage/>}/>
                    <Route exact path='/recipes' element={<RecipesPage/>}/>
                    <Route path='/' element={<MainPage/>} exact/>
                    <Route path='/recipes/:id' element={<RecipeFullPage/>} exact/>
                </Routes>
            </AnimatePresence>
        </Layout>
    </div>
}

export default App;
