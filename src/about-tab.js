const about = () => {
  const main_tag = document.createElement("main");
  const content_tag = document.getElementById("content");
  main_tag.id = "tab";
  main_tag.innerHTML = `<div class="card">
  <div class="container">
    <img
      src="../src/persondoesntexist1.jpg"
      alt="Avatar"
      style="width: 20%"
    />
    <h4>
      <b
        ><a href="https://thispersondoesnotexist.com/"
          >This person does not exist.</a
        ></b
      >
    </h4>
    <p>Founder</p>
    <p>555-555-5554</p>
    <p>totallyRealEmail@notFake.com</p>
  </div>
</div>
<br />
<div class="card">
  <div class="container">
    <img
      src="../src/persondoesntexist2.jpg"
      alt="Avatar"
      style="width: 20%"
    />
    <h4>
      <b
        ><a href="https://thispersondoesnotexist.com/"
          >This person does not exist.</a
        ></b
      >
    </h4>
    <p>Co-Owner</p>
    <p>555-555-5554</p>
    <p>totallyRealEmail@notFake.com</p>
  </div>
</div>
<br />
<div class="card">
  <div class="container">
    <img
      src="../src/persondoesntexist3.jpg"
      alt="Avatar"
      style="width: 20%"
    />
    <h4>
      <b
        ><a href="https://thispersondoesnotexist.com/"
          >This person does not exist.</a
        ></b
      >
    </h4>
    <p>Co-Owner</p>
    <p>555-555-5554</p>
    <p>totallyRealEmail@notFake.com</p>
  </div>
</div>`
content_tag.appendChild(main_tag);
};

export default about;
