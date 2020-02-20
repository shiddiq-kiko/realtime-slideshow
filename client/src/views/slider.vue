<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>"Welcome to SlideShow"</h1>
    <button class="btn btn-primary text-light" @click="back">Back</button>
    <button class="btn btn-primary text-light" @click="next">Next</button>
    <br><br>
    <img :src="img" style="max-height: 800px; max-width:1200px" alt="something error">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
var index = 0
export default {
  name: 'Home',
  props: ['socket'],
  data () {
    return {
      index: index,
      images: [
        {
          img: 'https://wallpapercave.com/wp/6HFR1UK.jpg',
          title: 'Gundam 00 raiser'
        },
        {
          img: 'https://wallpapercave.com/wp/wp2485872.jpg',
          title: 'Sinanju'
        },
        {
          img: 'https://www.ecopetit.cat/wpic/mpic/86-864188_wallpaper-mobile-suit-gundam-japanese-anime-nu-gundam.jpg',
          title: 'Nu Gundam'
        },
        {
          img: 'https://verdc23.files.wordpress.com/2010/03/gearawallpaper.jpg',
          title: 'Geara Zulu'
        },
        {
          img: 'https://cdn.hipwallpaper.com/i/22/95/L7FAMc.jpg',
          title: 'F91 Gundam'
        }
      ]
    }
  },
  computed: {
    // HelloWorld
    img () {
      return this.images[this.index].img
    }
  },
  methods: {
    back () {
      if (this.index === 0) {
        this.index = this.images.length - 1
      } else {
        this.index--
      }
      this.socket.emit('image', this.index)
    },
    next () {
      if (this.index === this.images.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      this.socket.emit('image', this.index)
    }
  },
  created () {
    this.socket.on('nextImage', function (data) {
      this.index = data
    })
  }
}
</script>
