const home = () => {
  const main_tag = document.createElement("main");
  const content_tag = document.getElementById("content");
  main_tag.id = "tab";
  main_tag.innerHTML = `<div class="card">
  <div class="container">
    <h4><b>WHY ACAI EXPRESS?</b></h4>
    <p>
      Acai Express creates an experience for people to “unplug” from the
      noise and stress of day-to-day life. Using our Premium Organic
      100% Grade “A” Acai as the centerpiece, our guests can practice an
      active and healthful eating lifestyle without giving up flavor…
      They are always eager to “refresh” & feed their mind, body & soul
      with our array of delicious Acai Express super food bowls.
      <br />Our Mission is simple - To Serve the best tasting, highest
      quality super food bowls that go hand in hand with a life style
      based around health and fun.
    </p>
  </div>
</div>
<br>
<div class="card">
  <div class="container">
    <h4><b>Schedule</b></h4>
    <ul>
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
      </ul>
  </div>
</div>
<br>
<div class="card">
  <div class="container">
    <h4><b>Location</b></h4>
    <p>221b Baker Street, London</p>
  </div>
</div>`
content_tag.appendChild(main_tag);
};

export default home;
