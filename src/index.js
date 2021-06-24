import home from "./home-tab";
import menu from "./menu-tab";
import about from "./about-tab";
import header from "./header";
import "./style.css";

const display_controller = (function (doc) {
  const initial_load = () => {
    const content_tag = doc.createElement("div");
    content_tag.setAttribute("id", "content");
    doc.body.appendChild(content_tag);
    _load_header();
    home();
    const _tab_btn_tags = [
      doc.getElementById("home_tab_btn"),
      doc.getElementById("menu_tab_btn"),
      doc.getElementById("about_tab_btn"),
    ];
    _tab_btn_tags[0].onclick = function (event) {
      display_controller.load_home();
    };
    _tab_btn_tags[1].onclick = function (event) {
      display_controller.load_menu();
    };
    _tab_btn_tags[2].onclick = function (event) {
      display_controller.load_about();
    };
  };

  const _load_header = () => {
    header();
  };

  const load_home = () => {
    _unload_tab(doc.getElementById("tab"));
    home();
  };

  const load_menu = () => {
    _unload_tab(doc.getElementById("tab"));
    menu();
  };

  const load_about = () => {
    _unload_tab(doc.getElementById("tab"));
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

document.onload = display_controller.initial_load();
