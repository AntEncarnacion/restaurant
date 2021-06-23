const menu = () => {
  const main_tag = document.createElement("main");
  const content_tag = document.getElementById("content");
  main_tag.id = "tab";
  main_tag.innerHTML = `<div class="card">
  <div class="container">
    <img src="../src/classic-bowl.png" alt="Avatar" style="width:20%">
    <h4><b>CLASSIC BOWL</b></h4>
    <p>Acai, granola and banana.</p>
  </div>
</div>
<br />
<div class="card">
  <div class="container">
    <img src="../src/valentine-bowl.png" alt="Avatar" style="width:20%">
    <h4><b>VALENTINE BOWL</b></h4>
    <p>Acai, coconut oil, granola, banana, nutella, strawberry and coconut flakes.</p>
  </div>
</div>
<br />
<div class="card">
  <div class="container">
    <img src="../src/surfer-bowl.png" alt="Avatar" style="width:20%">
    <h4><b>SURFER BOWL</b></h4>
    <p>Acai, coconut oil, granola, banana, strawberry, blueberry, coconut flakes and hemp seed.</p>
  </div>
</div>`
content_tag.appendChild(main_tag);
};

export default menu;
