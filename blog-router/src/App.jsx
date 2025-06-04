import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import NewBlogPage from "./pages/NewBlogPage"
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        Component: HomePage ,
      },
      {
        path: "blog",
        Component: BlogPage ,
      },
      {
        path: "addNew",
        Component: NewBlogPage ,
      },
      {
        path: "gallery",
        Component: GalleryPage ,
      },
      {
        path: "contact",
        Component: ContactPage ,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
  
  
}

export default App;
