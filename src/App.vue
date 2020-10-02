<template>
<div> 
  <Navbar v-bind:show='show' 
  v-bind:hide='hide'
  v-bind:DB='DB'
  />
  <div id="app">
    <header>  
      <h1 class="artist">{{ current.artist }}</h1>
      </header>
      <main>
        <h2 class="song-title">{{ current.title }} </h2>
        <div class="control">

          <button @click="previous" class="previous"><font-awesome-icon class="icon" icon="backward" /></button>

          <button @click="play" v-if="!isPlaying" class="play"><font-awesome-icon class="iconPlay" icon="play" /></button>

          <button @click="pause" v-else class="pause">  <font-awesome-icon class="icon" icon="pause" /></button>

          <button @click="next" class="next"><font-awesome-icon class="icon" icon="forward" /></button>
          </div>
      </main>

      <section class="playlist">
          <h3>PLAYLIST</h3>
          <button @click="play(song)" :class="song.src == current.src ? 'song playing' : 'song'" v-for="song in songs" :key="song.src">{{ song.title}}</button>
      </section>


      
      
    
       
</div>

  </div>
</template>

<script>
import { DB } from './DB.js'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: function() {

    console.log("DB IN APP", DB);
    return {
      DB: DB,
      current: {},
      index: 0,
      isPlaying: false,
      songs: DB.songs,
      player: new Audio()
    }
  },



  methods: {
    play (song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
    this.player.play();
    this.player.addEventListener('ended', function() {
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
    }.bind(this))
    this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    previous () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length -1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },

    // MODAL METHODS
    show () {
            this.$modal.show('modal');
        },
    hide () {
            this.$modal.hide('modal');
        },
    mount () {
        this.show()
    },

  },

  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.play();

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  margin: 60px;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: antiquewhite;
  color: gray;
}

main {
max-width: 768px;
 width: 100%;
 margin: 0 auto;
 padding: 0 25px 25px 25px;
}

h1, h2, h3 {

  font-size: 32px;
  font-weight: 700;
}

.artist {
    font-size: 35px;
}

.song-title {

  font-size: 25px;
  font-weight: 700;

  /* text-transform: uppercase; */
  text-align: center;
}

.previous, .play, .pause, .next {
  padding: 12px;
  margin: 10px 2px;
}

.control {
  /* border: 1px solid black; */
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

.icon {
  font-size: 25px;
  color: #24221f;
}

.iconPlay {
     font-size: 25px;
  color: #24221f;
}

.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.playlist .song {
  color: #961e1e
}


.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #961e1e, #c93c3c)
}


</style>
