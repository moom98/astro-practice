import $ from "src/jquery";

$(function () {
  // loading
  let webStorage = function () {
    if (sessionStorage.getItem("access")) {
      $("#splash").fadeOut(function () {
        $(".splashbg").addClass("pageAnime");
        $(".wrapper").addClass("wrapActive");
      });
      $(".loading").addClass("loadActive");
    } else {
      sessionStorage.setItem("access", "true");
      $(".loading__animation").addClass("loadAnimeActive");
      setTimeout(function () {
        $(".loading").addClass("loadActive");
        $(".loading__animation").removeClass("loadAnimeActive");
        $("#splash").fadeOut(function () {
          $(".splashbg").addClass("pageAnime");
          $(".wrapper").addClass("wrapActive");
        });
      }, 3000);
    }
  };
  webStorage();

  // mouse stalker
  const stalker = $("#mouse");

  window.addEventListener("mousemove", function (e) {
    stalker.css({
      transform: "translate(" + e.clientX + "px, " + e.clientY + "px)",
    });
  });

  // mouse hover
  $(".stkr-target").on({
    mouseenter: function () {
      stalker.addClass("mouseActive");
    },
    mouseleave: function () {
      stalker.removeClass("mouseActive");
    },
  });

  $(".stkr-target-txt").on({
    mouseenter: function () {
      stalker.addClass("mouseActive-txt");
    },
    mouseleave: function () {
      stalker.removeClass("mouseActive-txt");
    },
  });

  // smooth scroll
  $("a").on("click", function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const targetPos = $(target).offset().top - 50;

    $("html, body").animate(
      {
        scrollTop: targetPos,
      },
      500
    );

    return false;
  });

  // nav
  $("#btn").on("click", function () {
    $("#gnav").toggleClass("gnavActive");
    $("#btn span").toggleClass("btnActive");
    $(".btn__top").toggleClass("rotate-top");
    $(".btn__middle").toggleClass("rotate-middle");
    $(".btn__bottom").toggleClass("rotate-bottom");
    $(".header__logo, #btn").toggleClass("headerActive");
    $("body").toggleClass("noScroll");
  });

  $(".gnav__link").on("click", function () {
    $("#gnav").removeClass("gnavActive");
    $("#btn span").removeClass("btnActive");
    $(".btn__top").removeClass("rotate-top");
    $(".btn__middle").removeClass("rotate-middle");
    $(".btn__bottom").removeClass("rotate-bottom");
    $(".header__logo, #btn").removeClass("headerActive");
    $("body").removeClass("noScroll");
  });

  //section color change
  $(window).on("scroll load", function () {
    if (
      $(window).scrollTop() > $("#mv").offset().top + 300 &&
      $(window).scrollTop() < $("#int").offset().top - 200
    ) {
      $("#wrapper").css({
        "background-color": "#fff5f0",
        color: "#000",
      });
      $(".gnav__link").css({
        color: "#000",
      });
      $("#btn span, #mouse").css({
        "background-color": "#000",
      });
      document.getElementById("mv_canvas").style.opacity = 0;
      $(".mv__scroll").css({
        opacity: "0",
      });
    } else {
      $("#wrapper").css({
        "background-color": "#000",
        color: "#fff5f0",
      });
      $(".gnav__link").css({
        color: "#fff5f0",
      });
      $("#btn span, #mouse").css({
        "background-color": "#fff5f0",
      });
      document.getElementById("mv_canvas").style.opacity = 0.6;
      $(".mv__scroll").css({
        opacity: "1",
      });
    }
  });

  window.addEventListener("scroll", function () {
    // section number
    if (
      $(window).scrollTop() > $("#about").offset().top - 500 &&
      $(window).scrollTop() < $("#work").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("01");
    } else if (
      $(window).scrollTop() > $("#work").offset().top - 200 &&
      $(window).scrollTop() < $("#skill").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "0",
      });
      $(".secScroll__top").text("02");
    } else if (
      $(window).scrollTop() > $("#skill").offset().top - 300 &&
      $(window).scrollTop() < $("#int").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("03");
    } else if (
      $(window).scrollTop() > $("#int").offset().top - 200 &&
      $(window).scrollTop() < $("#footer").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("04");
    } else if ($(window).scrollTop() > $("#footer").offset().top - 200) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("05");
    } else
      $("#secScroll").css({
        opacity: "0",
      });

    // skill fadeIn
    if (
      $(window).scrollTop() > $("#skill").offset().top - 300 &&
      $(window).scrollTop() < $("#int").offset().top + 100
    ) {
      $(".skill__box").addClass("fadeIn");
    } else {
      $(".skill__box").removeClass("fadeIn");
    }

    // text slide scroll
    const aboutTop = $("#about").offset().top - 800;
    const intTop = $("#int").offset().top - 500;
    const ST = $(this).scrollTop();

    if (ST > aboutTop) {
      const slideX = ST - aboutTop - 500;
      $(".stroke__about").css({
        transform: "translateX(" + -slideX + "px)",
        transition: ".2s",
        "transition-timing-function": "cubic-bezier(0,1.01,1,.91)",
      });
    }

    if (ST > intTop) {
      const slideX = ST - intTop - 500;
      $(".stroke__int").css({
        transform: "translateX(" + -slideX + "px)",
        transition: ".2s",
        "transition-timing-function": "cubic-bezier(0,1.01,1,.91)",
      });
    }

    // form txt
    if ($(window).scrollTop() > $("#footer").offset().top - 500) {
      $(".fadeUp").addClass("fadeUp-isActive");
    }
  });

  // works hover
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // $(".work__item").hover(
    //   function () {
    //     const target = $(this).data("target");

    //     $(".work__item, #workScroll").not(this).stop().css("opacity", "0.2");
    //     $(".work__huge").addClass("workBgActive");
    //     $(target).addClass("workBgActive");
    //   },
    //   function () {
    //     $(".work__item, #workScroll").not(this).stop().css("opacity", "1");
    //     $(".work__huge").removeClass("workBgActive");
    //     $(".work__bg").removeClass("workBgActive");
    //   }
    // );
    const workItems = document.querySelectorAll(".work__item");
    // const workScroll = document.querySelector("#workScroll");
    const workHuge = document.querySelectorAll(".work__huge");
    const workBg = document.querySelectorAll(".work__bg");

    workItems.forEach((workItem) => {
      workItem.addEventListener("mouseenter", function () {
        const target = this.getAttribute("data-target");

        workItems.forEach((item) => {
          if (item !== this) {
            item.style.opacity = "0.2";
          }
        });

        // workScroll.style.opacity = "0.2";

        workHuge.forEach((huge) => {
          huge.classList.add("workBgActive");
        });

        document.querySelector(target).classList.add("workBgActive");
      });

      workItem.addEventListener("mouseleave", function () {
        workItems.forEach((item) => {
          if (item !== this) {
            item.style.opacity = "1";
          }
        });

        // workScroll.style.opacity = "1";

        workHuge.forEach((huge) => {
          huge.classList.remove("workBgActive");
        });

        workBg.forEach((bg) => {
          bg.classList.remove("workBgActive");
        });
      });
    });
  }

  // footer message
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLScOjSpbU6B4s734c1mqIOLM8m0gQugQQX7hX8L68_kOVhvKUw/viewform?usp=sf_link",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".form__message").slideDown();
          $(".form__submit").fadeOut();
        },
        200: function () {
          $(".form__false").slideDown();
        },
      },
    });
    event.preventDefault();
  });

  // mail copy
  $(".footer__mail").on("click", function () {
    const text = $(".footer__txtCopy").text();
    $(this).append(
      '<textarea class="clipboard__textarea">' + text + "</textarea>"
    );
    $(".clipboard__textarea").select();
    document.execCommand("copy");
    $(".clipboard__textarea").remove();
    alert("メールアドレスをコピーしました");
  });
});

// work gsap
const listWrapperEl = document.querySelector(".work__sideScroll");
const listEl = document.querySelector(".work__list");

gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".work",
    start: "top top",
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// interest pic swiper
const swiperPic = new Swiper(".swiper-pic", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  shortSwipes: false,
  longSwipes: false,
  speed: 500,
});

// interest txt swiper
const swiperTxt = new Swiper(".swiper-txt", {
  direction: "horizontal",
  loop: true,
  effect: "slide",
  slidesPerView: 1,

  speed: 400,

  pagination: {
    el: ".swiper-txt__pagination",
    type: "fraction",
  },

  navigation: {
    prevEl: ".swiper-txt__prev",
    nextEl: ".swiper-txt__next",
  },

  thumbs: {
    swiper: swiperPic,
  },
});

// svg
window.addEventListener("load", function () {
  deSVG(
    ".header__logo, .mv__img, .stroke__Fimg, .stroke__Bimg, .work__img",
    true
  );
});

// mv 3d
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// window.addEventListener("DOMContentLoaded", mvThree);

// Three.jsの実行状態を管理するフラグ
let isMvThreeRunning = false;

let animationFrameID,
  scene,
  camera,
  light,
  ambientLight,
  model,
  particles,
  renderer = null;

const canvas = document.querySelector("#mv_canvas");

// #my_canvasを監視、画面内にあるときのみmvThreeを実行
const options = {
  root: null,
  rootMargin: "0%",
  threshold: 0,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // isMvThreeRunningがfalseのとき（Three.jsが実行されていないとき）に実行
      if (!isMvThreeRunning) {
        mvThree();
      }
    } else {
      // 画面外に出たら監視を停止
      // observer.unobserve(canvas);
      if (isMvThreeRunning) {
        // Three.jsが実行されていたら停止する
        stopMvThree();
      }
    }
  });
}, options);

observer.observe(canvas);

// three.js 実行関数
async function mvThree() {
  // フラグをtrueにする
  isMvThreeRunning = true;
  // console.log("実行");

  let width = window.innerWidth;
  let height = window.innerHeight;

  // renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  // scene
  scene = new THREE.Scene();

  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.001, 10000);
  camera.position.set(0.1, 0.05, 0.5);
  scene.add(camera);

  // light
  light = new THREE.DirectionalLight("#fff5f0", 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  ambientLight = new THREE.AmbientLight();
  ambientLight.color = new THREE.Color(0xffffff);
  ambientLight.intensity = 0.5;
  ambientLight.position.x = 2;
  scene.add(ambientLight);

  // model by gltf
  const loader = new GLTFLoader();
  const objects = await loader.loadAsync("./images/3d/mv_huge_3d.glb");
  model = objects.scene;

  model.scale.set(0.68, 0.68, 0.7);
  model.position.set(0.1, 0.045, 0);
  model.rotation.set(0, -1.6, 0);
  scene.add(model);

  // particle
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;

  const positionArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionArray, 3)
  );

  // particles material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.025,
    sizeAttenuation: true,
    color: "#fff5f0",
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  //ブラウザのリサイズに対応
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  // カーソルの位置を取得する
  const cursor = {
    x: 0,
    y: 0,
  };

  const cursorEl = document.querySelector("#mv");

  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / width - 0.5;
    cursor.y = e.clientY / height - 0.5;

    let canvasRect = cursorEl.getBoundingClientRect();

    // カーソルが要素内にあるかどうかを判定
    if (
      cursor.x >= canvasRect.left / window.innerWidth - 0.5 &&
      cursor.x <= canvasRect.right / window.innerWidth - 0.5 &&
      cursor.y >= canvasRect.top / window.innerHeight - 0.5 &&
      cursor.y <= canvasRect.bottom / window.innerHeight - 0.5
    ) {
      cursorInside = true;
    } else {
      cursorInside = false;
    }
    // console.log(cursor.x, cursor.y);
  });

  // カーソルが画面外にいるかどうかのフラグ
  let cursorInside = true;
  cursorEl.addEventListener("mouseout", () => {
    cursorInside = false;
  });
  cursorEl.addEventListener("mouseover", () => {
    cursorInside = true;
  });

  // animation
  const clock = new THREE.Clock();
  const animate = () => {
    if (isMvThreeRunning) {
      // pcのfpsに合わせる
      let getDeltaTime = clock.getDelta();

      renderer.render(scene, camera);

      // オブジェクトを常に回転させ続ける
      model.rotation.x += 0.03 * getDeltaTime;
      model.rotation.y += 0.03 * getDeltaTime;
      model.rotation.z += 0.03 * getDeltaTime;

      // カーソルを用いたカメラの制御（カーソルが画面内にあるときのみ）
      if (cursorInside) {
        camera.position.x += cursor.x * getDeltaTime * 0.03;
        camera.position.y += -cursor.y * getDeltaTime * 0.03;
      }

      animationFrameID = requestAnimationFrame(animate);
    }
  };
  animate();
}

// three.js 停止関数
function stopMvThree() {
  cancelAnimationFrame(animationFrameID);
  scene = new THREE.Scene();
  camera = null;
  particles = null;
  renderer.setSize(0, 0);
  renderer.dispose();
  renderer = null;
  isMvThreeRunning = false;
  // console.log("停止");
}
