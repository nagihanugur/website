import News from "./components/news/News";
import New from "./components/news/New"
import Categories from "./components/categories/Categories"
import CategoryDetail from "./components/categories/CategoryDetail"


export const routes = [

    {path : '/', component : News },
    {path : '/categories', component : CategoryDetail, children : [
        {path : ':category', component : CategoryDetail}
    ] } , //:category ile bağla
    {path :"*", redirect : "/"}

];