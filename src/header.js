const header = () => {
  const header_tag = document.createElement("header");
  const content_tag = document.getElementById("content");
  header_tag.id = "nav";
  header_tag.innerHTML = ` <div class="logo">
  <img src="../src/acai_logo_horizontal.png" alt="" width="500" />
</div>
<nav>
  <ul>
    <li id="home_tab_btn">Home</li>
    <li id="menu_tab_btn">Menu</li>
    <li id="about_tab_btn">About</li>
  </ul>
</nav>`;
  content_tag.appendChild(header_tag);
  content_tag.appendChild(document.createElement("hr"));
  content_tag.appendChild(document.createElement("br"));
  content_tag.appendChild(document.createElement("br"));
  content_tag.appendChild(document.createElement("br"));
};

export default header;
