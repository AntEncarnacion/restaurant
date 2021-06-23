import home from "./home-tab";
import menu from "./menu-tab";
import about from "./about-tab";
import header from "./header";
import "./style.css";

const display_controller = (function (doc) {
  const tab_tag = document.getElementById("tab");
  const content_tag = document.getElementById("content");

//   const header_tag = document.getElementById("nav");

  const initial_load = () => {
    _load_header();
    home();
    const _tab_btn_tags = [ document.getElementById("home_tab_btn"), document.getElementById("menu_tab_btn"), document.getElementById("about_tab_btn")];
    _tab_btn_tags[0].onclick = function(event) {
        display_controller.load_home();
      }
    _tab_btn_tags[1].onclick = function(event) {
        display_controller.load_menu();
      }
    _tab_btn_tags[2].onclick = function(event) {
        display_controller.load_about();
      }
  };

  const _load_header = () => {
    header();
  };

  const load_home = () => {
    _unload_tab(document.getElementById("tab"));
    home();
  };

  const load_menu = () => {
    _unload_tab(document.getElementById("tab"));
    menu();
  };

  const load_about = () => {
    _unload_tab(document.getElementById("tab"));
    about();
  };

  const _unload_tab = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    parent.parentNode.removeChild(parent);
  };

  return {
    initial_load,
    load_home,
    load_menu,
    load_about,
  };
})(document);

display_controller.initial_load();


