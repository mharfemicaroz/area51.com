<template>
  <div class="counterup-area-3 gap-bottom-equal">
    <div class="container">
      <div class="row g-5">
        <div
          class="col-lg-3 col-sm-6"
          v-for="(counter, i) in funFacts"
          :key="i"
        >
          <div
            class="edu-counterup counterup-style-3"
            :class="i % 3 === 0 && i !== 0 ? 'border-none' : undefined"
          >
            <h2 class="counter-item count-number" :class="counter.class">
              <FunFact
                :number="counter.number"
                :decimal="counter.decimal"
                :suffix="counter.suffix"
              />
            </h2>
            <h6 class="title">{{ counter.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    FunFact: () => import("@/components/FunFact"),
  },
  data() {
    return {
      funFacts: [
        {
          number: 30,
          decimal: 0,
          class: "primary-color",
          title: "PARTNERS",
          suffix: "",
        },
        {
          number: 52,
          decimal: 0,
          class: "secondary-color",
          title: "CLIENTS",
          suffix: "",
        },
        {
          number: 100,
          decimal: null,
          class: "extra02-color",
          title: "SATISFACTION RATE",
          suffix: "%",
        },
        {
          number: 16,
          decimal: null,
          class: "extra05-color",
          title: "TOP SERVICES",
          suffix: "+",
        },
      ],
    };
  },
};
</script>
