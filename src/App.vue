<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Playground</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502166;
}

button {
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #7a1738, #ff059f);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b94242;
}

.modal {
  width: 250px;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  background-color: #6040d4;
}
</style>
