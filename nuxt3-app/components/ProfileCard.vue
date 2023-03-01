<template>
  <div class="card" data-state="#about">
    <div class="card-header">
      <div class="card-cover" style="background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div>
      <img class="card-avatar" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="avatar" />
      <h1 class="card-fullname">Dio Pei</h1>
      <h2 class="card-jobtitle">Front-end Engineers</h2>
    </div>
    <div class="card-main">
      <div class="card-section is-active" id="about">
        <div class="card-content">
          <div class="card-subtitle">ABOUT</div>
          <p class="card-desc">Like most front-end engineers, I have experienced generations without RWD, starting from traditional development, experiencing the separation of front and back ends, and still learning new technologies.
          </p>
        </div>
      </div>
      <div class="card-section" id="experience">
        <div class="card-content">
          <div class="card-subtitle">WORK EXPERIENCE</div>
          <div class="card-timeline">
            <div class="card-item" data-year="2017">
              <div class="card-item-title">Web designer at <span>Infinity Visual Art & System Design Company</span></div>
              <div class="card-item-desc">Graphic design, CIS design, webpage planning, webpage art design, webpage RWD design, webpage UI&UX design, webpage dynamic function design.</div>
            </div>
            <div class="card-item" data-year="2019">
              <div class="card-item-title">Web designer at <span>Vigor2</span></div>
              <div class="card-item-desc">RWD web design, barrier-free web design, Edm design, UI design, graphic design, packaging design, CIS design, label design, manual design, catalog design, document design.</div>
            </div>
            <div class="card-item" data-year="2020">
              <div class="card-item-title">Web designer at <span>Attoeipo</span></div>
              <div class="card-item-desc">Web design, Graphic design, UI&UX design, Front-end engineering.</div>
            </div>
            <div class="card-item" data-year="2022">
              <div class="card-item-title">Front-end Developer at <span>Gangutech</span></div>
              <div class="card-item-desc">Web Design, write Vue2-project and Vue3-project, maintain React-project.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-section" id="contact">
        <div class="card-content">
          <div class="card-subtitle">CONTACT</div>
          <div class="card-contact-wrapper">
            <div class="card-contact">
              Rm 2, 10F, No. 153, Sec. 2, Qinghai Rd, Xitun Dist, Taichung City 407 , Taiwan (R.O.C.)
            </div>
            <div class="card-contact">
              diopeitw@gmail.com
            </div>
            <div class="card-bottom">
              <NuxtLink class="contact-me" to="mailto:diopeitw@gmail.com">WORK TOGETHER</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button data-section="#about" class="is-active">ABOUT</button>
        <button data-section="#experience">EXPERIENCE</button>
        <button data-section="#contact">CONTACT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  mounted() {
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about"
          ? card.classList.add("is-active")
          : card.classList.remove("is-active");
      card.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

.card {
  max-width: 340px;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  margin: 15vh auto auto auto;
}

.card[data-state="#about"] {
  height: 450px;
  overflow: hidden;
  .card-main {
    padding-top: 0;
  }
}

.card[data-state="#contact"] {
  height: 430px;
  overflow-y: scroll;
}

.card[data-state="#experience"] {
  height: 550px;
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname,
  .card-jobtitle {
    left: 86px;
    transform: none;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
  }
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }
  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.card-buttons {
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;

  button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;

    &.is-active,
    &:hover {
      color: #2b2c48;
      border-bottom: 3px solid #8a84ff;
      background: linear-gradient(
              to bottom,
              rgba(127, 199, 231, 0) 0%,
              rgba(207, 204, 255, 0.2) 44%,
              rgba(211, 226, 255, 0.4) 100%
      );
    }
  }
}

.card-section {
  display: none;
  min-width: 300px;
  &.is-active {
    display: block;
    animation: fadeIn 0.6s both;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }
  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;
  &:after {
    background: linear-gradient(
            to top,
            rgba(134, 214, 243, 0) 0%,
            rgba(81, 106, 204, 1) 100%
    );
    content: "";
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: "";
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 8px;
  padding-bottom: 30px;
  z-index: 1;
  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(
            to bottom,
            lighten(#516acc, 20%) 0%,
            #516acc 100%
    );
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: "DM Sans", sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}
.card-bottom{
  margin-top: 10%;
}
.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(
          to right,
          rgba(83, 200, 239, 0.8) 0%,
          rgba(81, 106, 204, 0.8) 96%
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}

</style>