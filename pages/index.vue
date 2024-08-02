<script setup>
import AboutItem from "~/components/about-item.vue";
import data from "~/data";
const { hero, about, results, opportunity } = data;
</script>

<template>
  <!-- HERO -->
  <section>
    <UContainer class="h-[80vh] flex flex-col justify-between overflow-hidden">
      <p>{{ hero.subtitle1 }}</p>
      <h1 class="w-[75%]">{{ hero.title }}</h1>
      <div class="flex w-1/2">
        <div class="left flex">
          <NuxtImg src="/hero.svg" />
          <p>{{ hero.subtitle2 }}</p>
        </div>
        <div class="right flex">
          <NuxtImg src="/hero.svg" />
          <p>{{ hero.subtitle3 }}</p>
        </div>
      </div>
      <div>
        <Button>{{ hero.button.toUpperCase() }}</Button>
        <p>{{ hero.buttonSubtitle }}</p>
      </div>
      <!-- <NuxtImg
        src="/hero-right-photo.svg"
        class="absolute -right-10 top-[15vh] w-[900px]"
      /> -->
    </UContainer>
  </section>
  <!-- HERO END -->

  <!-- ABOUT -->
  <section>
    <UContainer>
      <TitleSection>{{ about.title }}</TitleSection>

      <div class="about-card grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AboutItem
          v-for="item in about.items"
          :icon="item.icon"
          :description="item.description"
        />
      </div>
      <div class="w-full flex justify-center mt-10">
        <Button>{{ about.button.toUpperCase() }}</Button>
      </div>
    </UContainer>
  </section>
  <!-- ABOUT END -->

  <!-- RESULTS -->
  <section>
    <div class="flex flex-col space-y-10">
      <TitleSection>{{ results.title }}</TitleSection>
      <div class="flex space-x-4 overflow-hidden h-72">
        <Carausel v-for="item in 10" />
      </div>
    </div>
  </section>
  <!-- RESULTS END -->

  <!-- OPPORTUNITY -->
  <section>
    <UContainer>
      <TitleSection>{{ opportunity.title }}</TitleSection>
      <div class="grid grid-cols-3 space-x-8">
        <NuxtImg :src="opportunity.img" class="w-full" />
        <div class="right flex flex-col space-y-4 col-span-2">
          <h3>{{ opportunity.subtitle1 }}</h3>
          <p>{{ opportunity.description1 }}</p>
          <h3>{{ opportunity.subtitle2 }}</h3>
          <ul v-for="item in opportunity.description2">
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
  <!-- OPPORTUNITY END-->

  <!-- VIDEO -->
  <section>
    <UContainer>
      <iframe
      class="aspect-video"

        src="https://www.youtube.com/embed/QY570G3M0O0?si=RbaVk7-aZ1QQ_OxC"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </UContainer>
  </section>
  <!-- VIDEO END -->
</template>
