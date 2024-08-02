<template>
  <div class="header border-b-2 w-full sticky top-0 z-50 bg-white h-[10vh] content-center">
    <UContainer class="flex justify-between items-center">
      <Logo />
      <nav class="space-x-8 max-lg:hidden">
        <nuxt-link to="">Nega biz</nuxt-link>
        <nuxt-link to="">Natijalar</nuxt-link>
        <nuxt-link to="">Kurslar</nuxt-link>
        <nuxt-link to="">Ko'p beriladigan savollar</nuxt-link>
      </nav>
      <div class="flex space-x-4">
        <nuxt-link to="tel:+998906549659">
          <Button>
            <Icon name="material-symbols:phone-in-talk" />
            Bog'lanish
          </Button>
        </nuxt-link>
        <button
          class="border-2 flex content-center p-1 border-black lg:hidden"
          @click="$emit('openMenu')"
        >
          <Icon name="fe:bar" color="black" class="text-2xl" />
        </button>
      </div>
    </UContainer>
  </div>
</template>
