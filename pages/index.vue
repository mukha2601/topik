<script setup>
import AboutItem from "~/components/about-item.vue";
import TitleSection from "~/components/title-section.vue";
import data from "~/data";
const {
  hero,
  about,
  results,
  opportunity,
  graduates,
  courses,
  whyUs,
  questions,
  questionsForm,
} = data;
</script>

<template>
  <!-- HERO -->
  <section>
    <UContainer class="h-[80vh] flex justify-between">
      <div class="left flex flex-col">
        <p>{{ hero.subtitle1 }}</p>
        <TitleSection class="w-full">{{ hero.title }}</TitleSection>
        <div class="flex">
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
      </div>
      <NuxtImg
        src="/hero-right-photo.svg"
        class="-right-10 top-[15vh] w-[600px]"
      />
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
        class="aspect-video w-full h-[700px]"
        src="https://www.youtube.com/embed/Aj0DOJeh9Fc?si=id1NTR-fzXWtzHGd"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="w-full bg-[#333333] text-[32px] text-white p-4">
        GKS granti haqida to’liq siz uchun tayyorlagan video suhbatimizda bilib
        oling! ...
      </div>
    </UContainer>
  </section>
  <!-- VIDEO END -->

  <!-- GRADUATES -->
  <section>
    <UContainer class="overflow-hidden">
      <TitleSection>{{ graduates.title }}</TitleSection>
      <div class="flex mt-8">
        <div
          class="left w-1/3 shrink-0 flex flex-col justify-between space-y-8"
        >
          <h3>{{ graduates.subtitle1 }}</h3>
          <p>{{ graduates.subtitle2 }}</p>
          <Button>{{ graduates.button }}</Button>
        </div>
        <div class="right flex h-80 space-x-4">
          <Carausel v-for="item in 10" />
        </div>
      </div>
    </UContainer>
  </section>
  <!-- GRADUATES END -->

  <!-- COURSES -->
  <section>
    <UContainer>
      <TitleSection>{{ courses.title }}</TitleSection>
      <div class="grid grid-cols-3 gap-4">
        <CoursesCard
          v-for="(item, index) in courses.card"
          :key="index"
          :title="item.title"
          :img="item.img"
          :description="item.description"
          :duration="item.duration"
          :price="item.price"
          :button="item.button"
        />
      </div>
    </UContainer>
  </section>
  <!-- COURSES END -->

  <!-- WHY US -->
  <section>
    <UContainer>
      <TitleSection>{{ whyUs.title }}</TitleSection>
      <div class="grid grid-cols-3">
        <WhyUsCard
          v-for="(item, index) in whyUs.items"
          :key="index"
          :num="index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </UContainer>
  </section>
  <!-- WHY US END -->

  <!-- QUESTIONS -->
  <section>
    <UContainer>
      <TitleSection>{{ questions.title }}</TitleSection>
      <UAccordion
        multiple
        :items="questions.items"
        open-icon="ep:circle-plus-filled"
        close-icon="ep:circle-close-filled"
        :ui="{ wrapper: 'w-full flex flex-col bg-white' }"
      />

      <div class="w-full p-4 bg-primary grid grid-cols-2">
        <div class="left flex flex-col w-full space-y-4 items-center">
          <h1>{{ questionsForm.title }}</h1>
          <p>{{ questionsForm.subtitle }}</p>
        </div>
        <div class="right flex flex-col w-full space-y-4 items-center">
          <input type="text" placeholder="ismingiz" />
          <input type="number" placeholder="+99890-900-90-90" />
          <Button>{{ questionsForm.button.toUpperCase() }}</Button>
        </div>
      </div>
    </UContainer>
  </section>
  <!-- QUESTIONS END -->
</template>
