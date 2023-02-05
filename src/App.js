import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Img from "./assets/gratitude.jpg";
import { useDispatch } from "react-redux";
import { getInitialData } from "./actions";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);
  return (
    <div>
      <div className="bg-white shadow mb-8">
        <nav className="flex gap-2 justify-center max-w-xl mx-auto text-zinc-500">
          <NavLink
            to="/"
            exact
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/notlar"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Tüm Notlar
          </NavLink>
          <NavLink
            to="/yeni-not"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-amber-600"
          >
            Yeni Not
          </NavLink>
        </nav>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <Switch>
        <Route exact path="/">
          <div className="max-w-xl mx-auto px-4 pb-8">
            <div className="beyazKutu">
              <img src={Img} alt="" />
              <div className="px-8 pt-7 pb-6 text-sm">
                <h1 className="text-3xl text-amber-600">
                  Minnet Günlüğü Nedir?
                </h1>
                <p className="my-2">
                  Minnet günlüğü, kişinin hayatındaki olumlu şeylere
                  odaklanması, minnettarlık ve şükran duygusunu hissetmesi için
                  sık sık teşekkür ettiği şeyleri yazdığı bir tür günlüktür.
                  Zihinsel iyi oluş için basit fakat oldukça etkili bir
                  yöntemdir ve kişinin hayata pozitif bir bakış açısı
                  geliştirmesine yardımcı olabilir.{" "}
                </p>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/yeni-not">
          <div className="max-w-md sm:max-w-4xl mx-auto px-4 pb-8">
            <PostForm />
          </div>
        </Route>

        <Route path="/notlar">
          <div className="max-w-md mx-auto px-4 pb-8">
            <PostList />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
