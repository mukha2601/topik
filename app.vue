<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: white;
  color: black;
}
p {
  font-size: 16px;
}
html {
  scroll-behavior: smooth;
}

.container {
  overflow: hidden;
}

body {
  font-family: "Kanit", sans-serif;
  background-color: white;
  color: black;
}

input {
  background-color: white;
}

::-webkit-scrollbar {
  width: 0.4rem;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: #70bebb;
}

h3 {
  font-size: 22px;
}

section {
  padding: 2rem 0;
}
</style>
