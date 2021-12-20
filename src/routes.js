import News from "./components/news/News";
import New from "./components/news/New"
import Categories from "./components/Shared/Categories"


export const routes = [

    {path : '/', component : News },
    {path : '/category', component : Categories }  //:category ile bağla

];