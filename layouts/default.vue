<template>
  <Header />
  <slot />
  <Footer />
</template>

<style>
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
h1 {
  font-size: 54px;
}
h3{
  font-size: 26px;
}
p {
  font-size: 20px;
}
section {
  padding: 2rem 0;
}
</style>
