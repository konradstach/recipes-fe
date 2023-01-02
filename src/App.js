import './App.css';
import Layout from "./components/ui/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import RecipesPage from "./pages/RecipesPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import RecipeFullPage from "./pages/RecipeFullPage";

function App() {
  return <div>
    <Layout>
      <Routes>
        <Route path='/shoppingList' element={<ShoppingListPage/>}/>
        <Route exact path='/recipes' element={<RecipesPage/>}/>
        <Route path='/' element={<MainPage/>} exact/>
        <Route path='/recipes/:id' element={<RecipeFullPage/>} exact/>
      </Routes>
    </Layout>
  </div>
}

export default App;
