<template>

<div class="navbar">
  <button class="albumsButton">ALBUMS</button>

</div>


</template>

<script>

export default {
  name: 'Navbar',
}

</script>

<style>

.navbar {
  background-image: linear-gradient(to right, #961e1e, #c93c3c);
  display: flex;
   align-items: center;
  
}

.musicText {
  color: white;
}

.albumsButton {
  background-color: white;
  height: 30px;
  width: 80px;
   margin-left: 50px;
   border-radius: 4px;
}

.albumsButton:hover {
  background-color: #f5ebeb;
}



</style>