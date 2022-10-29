let createSwiper = () => {
  const swiper = new Swiper(`.mySwiper`, {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//--------------- reponse
const sideBarRight = document.querySelector(".sidebar_right");
const btnBarMobile = document.querySelectorAll(".icon-bar_mobile");

//----------------------

const playList = document.querySelector(".content_item-song-wrap");
const sliderWrapper = document.querySelector(".content-bot-slide");

const imgCurrenSong = $(".content-middle-img");
const imgCurrenBot = $(".control_infor-cur");
const infoSongBot = $(".control_infor-name");
const audio = document.querySelector("#audio");

const btnPlay = document.querySelector(".play_music");
const btnNext = document.querySelector(".icon-next");
const btnPre = document.querySelector(".icon-preview");
const btnRandom = document.querySelector(".icon-random");
const btnRepeat = document.querySelector(".icon-repeat");
const btnVolume = document.querySelector(".btn-control-volume");

const uiNameSinger = document.querySelector(".content_bot-name-singer");
const listSinger = document.querySelector(".sidebar-right-top_singers");

const rangeTime = document.querySelector(".control_bar-time_range");
const rageVolume = document.querySelector(".volume__range");
const app = {
  currentIndex: 0,
  currentVolume: 0,
  isMute: false,
  isPlay: false,
  isBar: false,
  isMoble: false,
  isRandom: false,
  isRepeat: false,
  songsRandom: [],
  singers: [
    {
      id: "0",
      name: "Avicii",
      image:
        "https://i.pinimg.com/564x/e9/43/26/e943267c1710b1a6e1ef17d31e34675e.jpg",
    },
    {
      id: "1",
      name: "Charlie Puth", // Need note
      image:
        "https://i.pinimg.com/564x/2b/fb/51/2bfb51ee5f2953073d358f3cae9df5e9.jpg",
    },
  ],
  songsForYou: [
    {
      name: "Kings and Queens",
      singer: "Ava Max",

      path: "./assets/songs/top_cover/KingsQueens.mp3",
      image:
        "https://i.pinimg.com/564x/e5/b3/25/e5b3257ec5775a970651b481c0ff55f1.jpg",
      time: "2:42",
    },
    {
      name: "Bonfire",
      singer: "Peder Elias",

      path: "./assets/songs/top_cover/bonfire2.mp3",
      image:
        "https://i.pinimg.com/564x/eb/e9/b5/ebe9b59cf432d6668f35340f6abdd0a6.jpg",
      time: "3:06",
    },
    {
      name: "Landside",
      singer: "Oh Wonder",

      path: "./assets/songs/top_cover/landside.mp3",
      image:
        "https://i.pinimg.com/564x/4d/56/e9/4d56e937903f41b219f78ef9aab1ba84.jpg",
      time: "3:28",
    },
    {
      name: "Like My Father",
      singer: "Jax",

      path: "./assets/songs/top_cover/Like My Father - Jax.mp3",
      image:
        "https://i.pinimg.com/564x/3b/94/aa/3b94aadb4fda585563c0a7bdbbb0022a.jpg",
      time: "3:50",
    },
    {
      name: "Old Town Road",
      singer: "Lil Nas",

      path: "./assets/songs/top_cover/Old Town Road.mp3",
      image:
        "https://i.pinimg.com/564x/e6/55/a3/e655a3fd9e70e20ddd2ca7ce9fea05f1.jpg",
      time: "2:37",
    },
    {
      name: "One Last Time",
      singer: "Ariana Grande",

      path: "./assets/songs/top_cover/One Last Time .mp3",
      image:
        "https://i.pinimg.com/564x/d2/a6/8d/d2a68dd665f70110aaf2b15977c90cca.jpg",
      time: "3:13",
    },
    {
      name: "Telescope",
      singer: "Tim Legend ft. Transviolet",

      path: "./assets/songs/top_cover/Telescope.mp3",
      image:
        "https://i.pinimg.com/564x/27/f9/5f/27f95f8eaac03aae2ca4999d245a9c1f.jpg",
      time: "2:25",
    },
    {
      name: "Unstoppable",
      singer: "Sia",

      path: "./assets/songs/top_cover/Unstoppable.mp3",
      image:
        "https://i.pinimg.com/564x/a3/24/f3/a324f3c33af514873ebbedad08d17a7d.jpg",
      time: "3:37",
    },
    {
      name: "Mashup Talk Old Town Road Bad Guy",
      singer: "Madilyn Bailey",

      path: "./assets/songs/top_cover/Mashup Talk Old Town Road Bad Guy.mp3",
      image:
        "https://i.pinimg.com/564x/c5/5a/0a/c55a0a3117457a645b32f4de4485d559.jpg",
      time: "2:52",
    },
  ],
  avicii: [
    {
      name: "Wake me up",
      singer: "Avicii",

      path: "./assets/songs/Avicii/Wake Me Up - Avicii_ Aloe Blacc.mp3",
      image:
        "https://i.pinimg.com/564x/5f/6a/fc/5f6afc7a6e46f9fc0d2c6d4e0f22a0b4.jpg",
    },
    {
      name: "The nights",
      singer: "Avicii",

      path: "./assets/songs/Avicii/The Nights - Avicii (NhacPro.net).mp3",
      image:
        "https://i.pinimg.com/564x/cb/c4/c7/cbc4c7b1d7f3567427fc66f7b67d6811.jpg",
    },
    {
      name: "Waiting for love",
      singer: "Avicii",

      path: "./assets/songs/Avicii/WaitingForLove-Avicii-4203283.mp3",
      image:
        "https://i.pinimg.com/564x/2e/e0/1c/2ee01cfb90d30c425ebfad55fe6c26c6.jpg",
    },
    {
      name: "Levels",
      singer: "Avicii",

      path: "./assets/songs/Avicii/Levels-Avicii_4f5w.mp3",
      image:
        "https://i.pinimg.com/564x/ba/d7/b9/bad7b98d13693e517e18ae88b46e763f.jpg",
    },
    {
      name: "The Days",
      singer: "Avicii",

      path: "./assets/songs/Avicii/The Days - Avicii_ Robbie Williams.mp3",
      image:
        "https://i.pinimg.com/564x/55/be/95/55be95399b5e252ba8537e68f9b912fa.jpg",
    },
  ],
  singer2: [
    {
      name: "See you again",
      singer: "Charlie Puth",

      path: "./assets/songs/Charlie Puth/See You Again - Wiz Khalifa_ Charlie Put.mp3",
      image:
        "https://i.pinimg.com/564x/25/b0/08/25b0082367e5ac50aa54c3d5d9666e3d.jpg",
    },
    {
      name: "We dont talk anymore",
      singer: "Charlie Puth",

      path: "./assets/songs/Charlie Puth/We Don_t Talk Anymore - Charlie Puth_ Se.mp3",
      image:
        "https://i.pinimg.com/564x/84/d3/21/84d3210f45cc5dc68c1d44b945353472.jpg",
    },
  ],
  typeList: [
    {
      type: "Avicii",
      status: false,
      arrOf() {
        return app.avicii;
      },
    },
    {
      type: "isSongForYou",
      status: true,
      arrOf() {
        return app.songsForYou;
      },
    },
    {
      type: "Charlie Puth",
      status: false,
      arrOf() {
        return app.singer2;
      },
    },
  ],
  renderSongForYou() {
    let htmls = this.songsForYou.map((song, index) => {
      return `
      <div class="content_item-song" data-index ="${index}">
      <div class="content_list-left" data-like ="${index}">
        <p class="content_list-number">${index + 1}</p>
        <img
        class="content_song-play"
        src="./assets/imgsLink/output-onlinegiftools.gif"
        alt=""
      />

        <i class="btn_heart content_heart fa-thin fa-heart" data-like = ${index} ></i>
        <i class="btn_heart content_heart-liked fa-sharp fa-solid fa-heart"data-like = ${index}></i>
 
        <div class="content_infor-song">
          <h3 class="content_name-song">${song.name}</h3>
          <p class="content_author-song">${song.singer}</p>
        </div>
      </div>
      <div class="content_list-right">
        <i class="fa-light fa-ellipsis"></i>
        <p class="content_time-song">${song.time}</p>
      </div>
    </div>
    
      `;
    });

    playList.innerHTML = htmls.join("");
  },
  renderSongSinger(nameSinger = this.avicii) {
    const htmlAvicii = nameSinger.map((song, index) => {
      return `
      <div class="swiper-slide">
      <div class="swiper-slide_content">
        <div class="swiper-slide_img ${song.singer}"data-index='${index}' data-singer='${song.singer}'>
          <img
            class="bg-song_singer"
            src=${song.image}
            alt=""
          />
         
          <li class="play_music-singer">
         
          <i class="fa-light fa-circle-play icon-play icon-play_singer" data-index='${index}' data-singer='${song.singer}'></i>
        </li>
          <img
            class="content_song-play_singer"
            src="./assets/imgsLink/output-onlinegiftools-white.gif"
            alt=""
          />
        </div>
        <h3 class="name_song-singer">
          ${song.name}
        </h3>
      </div>
    </div>
      `;
    });
    sliderWrapper.innerHTML = `
    <div class="swiper mySwiper">
              <div class="swiper-wrapper">
              ${htmlAvicii.join("")}
              </div>
              <div class="swiper-pagination"></div>
            </div>
              `;
  },
  renderSingers() {
    const htmlSingers = this.singers.map((singerInfo) => {
      return `
    <li class="sidebar-right-top_singer" data-name=${singerInfo.id}>
              <div class="sidebar-top_singer-info">
                <img
                  src=${singerInfo.image}
                  alt=""
                />
                <p class="name-singer">${singerInfo.name}</p>
              </div>
            </li>
    `;
    });
    listSinger.innerHTML = htmlSingers.join("");
  },
  checkSingerRender() {
    $$(".sidebar-right-top_singer").forEach((nameSinger) => {
      nameSinger.addEventListener("click", (e) => {
        if (nameSinger.dataset.name === "0") {
          uiNameSinger.innerHTML = "Avicii's song";
          this.renderSongSinger(this.avicii);
          createSwiper();
          this.chooseSongSinger();
          if (this.typeList[0].status) {
            this.checkChooseSinger();
            // let activeType = ".swiper-slide_img";
            // $$(activeType).forEach((song) => {
            //   if (!this.isPlay) {
            //     if (Number(song.dataset.index) === this.currentIndex) {
            //       song.classList.remove("playing");
            //     }
            //   } else {
            //     if (Number(song.dataset.index) === this.currentIndex) {
            //       song.classList.add("playing");
            //     } else {
            //       song.classList.remove("playing");
            //     }
            //   }
            // });
          }
        } else if (nameSinger.dataset.name === "1") {
          //Need note
          uiNameSinger.innerHTML = "Charlie Puth's songs";
          this.renderSongSinger(this.singer2);

          createSwiper();

          this.chooseSongSinger();
          if (this.typeList[2].status) {
            this.checkChooseSinger();
            // let activeType = ".swiper-slide_img";
            // $$(activeType).forEach((song) => {
            //   if (!this.isPlay) {
            //     if (Number(song.dataset.index) === this.currentIndex) {
            //       song.classList.remove("playing");
            //     }
            //   } else {
            //     if (Number(song.dataset.index) === this.currentIndex) {
            //       song.classList.add("playing");
            //     } else {
            //       song.classList.remove("playing");
            //     }
            //   }
            // });
          }
        }
      });
    });
  },
  checkSongUi() {
    let activeType = "";
    if (this.typeList[1].status) activeType = ".content_item-song";
    if (this.typeList[0].status || this.typeList[2].status) return;
    //  activeType = ".swiper-slide_img";
    $$(activeType).forEach((song) => {
      if (Number(song.dataset.index) !== this.currentIndex) {
        song.classList.remove("active");
      } else {
        song.classList.add("active");
        // if (this.currentIndex >= 4) {
        song.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        // }
      }
    });
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get() {
        if (this.typeList[0].status) {
          return this.avicii[this.currentIndex];
        } else if (this.typeList[1].status) {
          return this.songsForYou[this.currentIndex];
        } else if (this.typeList[2].status) {
          return this.singer2[this.currentIndex];
        }
      },
    });
  },
  loadCurrenSong() {
    console.log(this.currentSong);
    imgCurrenSong.style.backgroundImage = `url('${this.currentSong.image}')`;
    imgCurrenBot.querySelector("img").src = `${this.currentSong.image}`;
    infoSongBot.querySelector("h3").innerHTML = this.currentSong.name;
    infoSongBot.querySelector("p").innerHTML = this.currentSong.singer;
    audio.src = this.currentSong.path;
  },

  handleEven() {
    //----------Even play and pause
    btnPlay.addEventListener("click", () => {
      this.isPlay = !this.isPlay;
      this.isPlay ? audio.play() : audio.pause();
      this.audioPlay();

      this.audioPause();
    });

    // ----------Even next song
    btnNext.addEventListener("click", () => {
      if (this.isRandom) {
        this.randomSong();
      } else if (this.isRepeat) {
        this.repeatSong();
      } else this.nextSong();
    });

    // ---------- Even preview song
    btnPre.addEventListener("click", () => {
      if (this.isRandom) {
        this.randomSong();
      } else if (this.isRepeat) {
        this.repeatSong();
      } else this.backSong();
    });

    // -----------Handle ended
    audio.onended = () => {
      btnNext.click();
    };

    // -----------Handle time range
    audio.ontimeupdate = () => {
      if (audio.duration) {
        const percent = (audio.currentTime * 100) / audio.duration;
        rangeTime.value = percent;
      }
    };

    //-------------- Handle change current time
    rangeTime.oninput = () => {
      audio.currentTime = (rangeTime.value * audio.duration) / 100;
    };

    // --------------Handle choose song and playlist played
    playList.addEventListener("click", (e) => {
      this.typeList.forEach((type) => {
        if (
          e.target.closest(".fa-light") ||
          e.target.closest(".fa-thin") ||
          e.target.closest(".fa-sharp")
        )
          return;
        if (type.type === "isSongForYou") type.status = true;
        else {
          const activeType = ".swiper-slide_img";
          $$(activeType).forEach((song) => {
            //   .swiper-slide_img
            if (Number(song.dataset.index) === this.currentIndex) {
              song.classList.remove("playing");
            }
          });
          type.status = false;
        }
      });

      if (
        e.target.closest(".content_item-song").dataset.index ===
          this.currentIndex ||
        e.target.closest(".fa-light") ||
        e.target.closest(".fa-thin") ||
        e.target.closest(".fa-sharp")
      ) {
        return;
      } else {
        this.currentIndex = Number(
          e.target.closest(".content_item-song").dataset.index
        );
        this.loadCurrenSong();
        audio.play();
        this.checkSongUi();
        this.audioPlay();
      }
    });

    // ----------Handle choose song in list singer
    this.chooseSongSinger();

    // -------------Tongle random
    btnRandom.addEventListener("click", () => {
      if (this.isRepeat) return;
      this.isRandom = !this.isRandom;
      btnRandom.classList.toggle("active-icon", this.isRandom);
    });

    // ----------Tongle repeat
    btnRepeat.addEventListener("click", () => {
      if (this.isRandom) return;
      this.isRepeat = !this.isRepeat;
      btnRepeat.classList.toggle("active-icon", this.isRepeat);
    });

    // ----------Tongle heart liked
    $$(".btn_heart").forEach((btnLike) => {
      btnLike.addEventListener("click", () => {
        $$(".content_list-left").forEach((heart) => {
          if (heart.dataset.like === btnLike.dataset.like)
            heart.classList.toggle("liked");
        });
      });
    });

    // -------Handle change volume
    rageVolume.oninput = (e) => {
      audio.volume = e.target.value;
      if (e.target.value === "0") {
        btnVolume.classList.add("mute");
        this.isMute = true;
      } else {
        btnVolume.classList.remove("mute");
        this.isMute = false;
      }
    };

    // -----=Handle mute and unmute
    btnVolume.addEventListener("click", () => {
      this.isMute = !this.isMute;
      btnVolume.classList.toggle("mute");
      if (this.isMute) {
        this.currentVolume = audio.volume;
        audio.volume = 0;
        rageVolume.value = 0;
      } else {
        audio.volume = this.currentVolume;
        rageVolume.value = this.currentVolume;
      }
    });
    // ------------Handle menu bar mobile
    btnBarMobile.forEach((btnMobile) => {
      btnMobile.addEventListener("click", () => {
        this.checkSideBar();
      });
    });
    $$(".sidebar-top_singer-info").forEach((singer) => {
      singer.addEventListener("click", () => {
        if (this.isMoble) this.checkSideBar();
        else return;
      });
    });
  },

  // -------------Choose Song of singer
  chooseSongSinger() {
    $$(".icon-play_singer").forEach((iconPlaySinger) => {
      iconPlaySinger.addEventListener("click", (e) => {
        console.log(e.target);
        this.typeList.forEach((type) => {
          if (type.type === e.target.dataset.singer) {
            type.status = true;
            console.log(this.typeList);
          } else {
            const activeType = ".content_item-song";
            $$(activeType).forEach((song) => {
              //   .swiper-slide_img
              if (Number(song.dataset.index) === this.currentIndex) {
                song.classList.remove("playing");
              }
            });
            type.status = false;
          }
        });

        if (
          e.target.closest(".swiper-slide_img").dataset.index ===
          this.currentIndex
        ) {
          console.log(11);
          return;
        } else {
          console.log(22);
          this.currentIndex = Number(
            e.target.closest(".swiper-slide_img").dataset.index
          );
          this.loadCurrenSong();
          audio.play();
          this.checkSongUi();
          this.audioPlay();
        }
        $$(".content_item-song").forEach((song) => {
          song.classList.remove("active");
        });
        // this.renderSongForYou();
      });
    });
  },

  // ---------When audio played
  audioPlay() {
    audio.addEventListener("play", () => {
      btnPlay.classList.add("playing");
      imgCurrenSong.classList.add("rotation");
      imgCurrenSong.classList.remove("unRotation");
      let activeType = "";

      if (this.typeList[1].status) {
        activeType = ".content_item-song";
        $$(activeType).forEach((song) => {
          // if (song.dataset.singer === this.checkTypeName()) {
          if (Number(song.dataset.index) === this.currentIndex) {
            song.classList.add(`playing`);
          } else {
            song.classList.remove(`playing`);
          }
          // }
        });
      }
      if (this.typeList[0].status) {
        activeType = ".swiper-slide_img";
        $$(activeType).forEach((song) => {
          if (Number(song.dataset.index) === this.currentIndex) {
            if (song.dataset.singer === "Avicii") {
              song.classList.add("playing");
            }
          } else song.classList.remove("playing");
        });
      }
      if (this.typeList[2].status) {
        activeType = ".swiper-slide_img";

        $$(activeType).forEach((song) => {
          if (Number(song.dataset.index) === this.currentIndex) {
            if (song.dataset.singer === "Charlie Puth") {
              song.classList.add("playing");
            }
          } else song.classList.remove("playing");
        });
      }
      this.isPlay = true;
    });
  },

  // -------When audio Paused
  audioPause() {
    audio.addEventListener("pause", () => {
      btnPlay.classList.remove("playing");
      imgCurrenSong.classList.remove("rotation");
      imgCurrenSong.classList.add("unRotation");
      let activeType = "";
      if (this.typeList[1].status) activeType = ".content_item-song";
      if (this.typeList[0].status || this.typeList[2].status)
        activeType = ".swiper-slide_img";
      // if (this.typeList[0].status)
      $$(activeType).forEach((song) => {
        //   .swiper-slide_img
        if (Number(song.dataset.index) === this.currentIndex) {
          song.classList.remove("playing");
        }
      });
      // if (this.typeList[0].status) {
      //   let activeType = ".swiper-slide_img";
      //   $$(activeType).forEach((song) => {
      //     if (Number(song.dataset.index) === this.currentIndex) {
      //       song.classList.remove("playing");
      //     }
      //   });
      // }
      this.isPlay = false;
    });
  },
  nextSong() {
    this.currentIndex++;
    arrL = this.checkTypePlaylist();
    if (this.currentIndex > arrL.length - 1) this.currentIndex = 0;
    this.checkSongUi();
    this.loadCurrenSong();
    audio.play();
    this.audioPlay();
  },
  backSong() {
    this.currentIndex--;
    arrL = this.checkTypePlaylist();
    if (this.currentIndex < 0) this.currentIndex = arrL.length - 1;
    this.checkSongUi();
    this.loadCurrenSong();
    audio.play();
    this.audioPlay();
  },
  chooseSong() {},
  randomSong() {
    let newIndex;
    let numberSong;
    let arrL;
    this.typeList.forEach((type) => {
      if (type.status) arrL = type.arrOf();
    });
    console.log(arrL);
    do {
      newIndex = Math.trunc(Math.random() * arrL.length);
      numberSong = this.songsRandom.some((number) => {
        return newIndex === number;
      });
    } while (numberSong || newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    console.log(numberSong);
    this.songsRandom.push(this.currentIndex);
    console.log(this.currentIndex);
    if (this.songsRandom.length >= arrL.length - 1) this.songsRandom = [];
    this.checkSongUi();
    this.loadCurrenSong();
    audio.play();
    this.audioPlay();
  },
  repeatSong() {
    this.checkSongUi();
    this.loadCurrenSong();
    audio.play();
    this.audioPlay();
  },
  checkChooseSinger() {
    let activeType = ".swiper-slide_img";
    $$(activeType).forEach((song) => {
      if (!this.isPlay) {
        if (Number(song.dataset.index) === this.currentIndex) {
          song.classList.remove("playing");
        }
      } else {
        if (Number(song.dataset.index) === this.currentIndex) {
          song.classList.add("playing");
        } else {
          song.classList.remove("playing");
        }
      }
    });
  },
  checkTypePlaylist() {
    let arrL;
    this.typeList.forEach((type) => {
      if (type.status) arrL = type.arrOf();
    });
    return arrL;
  },
  checkTypeName() {
    let nameCurren;
    this.typeList.forEach((name) => {
      if (type.status) nameCurren = name.type;
    });
    return nameCurren;
  },
  checkSideBar() {
    this.isBar = !this.isBar;
    if (this.isBar) {
      sideBarRight.style.left = "0";
      $(".icon-bar_open").style.display = "none";
      $(".icon-bar_times").style.display = "inline-block";
      $("body").style.overflow = "hidden";
      playList.style.overflow = "hidden";
    } else {
      sideBarRight.style.left = "-100%";
      $(".icon-bar_open").style.display = "inline-block";
      $(".icon-bar_times").style.display = "none";
      $("body").style.overflow = "unset";
      playList.style.overflow = "auto";
    }
  },
  reSize() {
    if (window.innerWidth <= 739) this.isMoble = true;
    else this.isMoble = false;
    if (window.innerWidth <= 414) {
      createSwiper = () => {
        const swiper = new Swiper(`.mySwiper`, {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
      };
    } else {
      if (window.innerWidth >= 420) return;
      createSwiper = () => {
        const swiper = new Swiper(`.mySwiper`, {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
      };
    }
  },

  start() {
    this.reSize();
    this.defineProperties();
    this.renderSongForYou();

    this.renderSingers();

    this.renderSongSinger();
    createSwiper();
    // this.chooseSongSinger();
    this.checkSingerRender();

    // difine

    this.loadCurrenSong();

    this.handleEven();

    this.checkSongUi();
  },
};

app.start();
console.log(app.currentSong);

// render for you

// difin
// function defineProperties() {
//   Object.defineProperty(this, "currentSong", {
//     get: function () {
//       return songs[currentIndex];
//     },
//   });
// }
// console.log(defineProperties());
// function loadCurrenSong() {}
// loadCurrenSong();

// const play = document.querySelector(".play_music");
// play.addEventListener("click", () => {
//   isPlay = !isPlay;
//   if (isPlay) {
//     play.classList.add("playing");
//     audio.play();
//   } else {
//     play.classList.remove("playing");
//     audio.pause();
//   }
// });
