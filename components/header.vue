<template>
  <div
    class="header border-b-2 w-full sticky top-0 z-50 bg-white py-4 content-center"
  >
    <UContainer class="flex justify-between items-center">
      <Logo />
      <nav class="space-x-8 max-lg:hidden">
        <ULink to="#about" >Nega biz</ULink>
        <ULink to="#results">Natijalar</ULink>
        <ULink to="#courses">Kurslar</ULink>
        <ULink to="#questions">Ko'p beriladigan savollar</ULink>
      </nav>
      <div class="flex space-x-4">
        <nuxt-link to="tel:+998906549659">
          <Button class="flex items-center gap-2">
            <Icon name="material-symbols:phone-in-talk" />
            Bog'lanish
          </Button>
        </nuxt-link>
        <button
          class="border-2 grid place-content-center p-1 border-black lg:hidden"
          @click="$emit('openMenu')"
        >
          <Icon name="fe:bar" color="black" class="text-2xl" />
        </button>
      </div>
    </UContainer>
  </div>
</template>
