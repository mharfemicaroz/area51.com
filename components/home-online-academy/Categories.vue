<template>
  <div
    class="edu-categorie-area categorie-area-3 edu-section-gap bg-image bg-image--4"
    id="categories"
  >
    <div class="container">
      <SectionTitle
        alignment="section-center"
        preTitle="Industries"
        preTitleClass="pre-textsecondary"
        title='Bridging the Digital Divide in <span class="color-primary">Key Sectors</span>'
        subTitle="With ready-to-use digital platforms that expedite various processes and transactions, the company is able to bridge the digital divide in key sectors."
      />

      <div
        class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4"
      >
        <div
          class="col"
          data-aos-delay="100"
          data-aos="fade-up"
          data-aos-duration="800"
          v-for="(category, index) in categories"
          :key="index"
        >
          <div
            class="categorie-grid categorie-style-3"
            :class="category.colorClass"
          >
            <div class="icon" :class="category.extraClass">
              <i :class="category.iconClass"></i>
            </div>
            <div class="content">
              <h5 class="title">{{ category.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("@/components/common/SectionTitle"),
  },
  data() {
    return {
      categories: [
        {
          title: "Cybersecurity",
          iconClass: "ri-lock-password-fill",
          colorClass: "color-primary-style",
        },
        {
          title: "Cloud Computing",
          iconClass: "ri-cloud-fill",
          colorClass: "color-secondary-style",
        },
        {
          title: "Software Dev",
          iconClass: "ri-apps-2-fill",
          colorClass: "color-extra04-style",
        },
        {
          title: "IT Consulting",
          iconClass: "ri-kakao-talk-fill",
          colorClass: "color-tertiary-style",
        },
        {
          title: "Data Analytics",
          iconClass: "ri-bar-chart-2-fill",
          colorClass: "color-extra02-style",
        },
        {
          title: "Network Solutions",
          iconClass: "ri-link-m",
          colorClass: "color-extra07-style",
          extraClass: "network-icon",
        },
        {
          title: "Tech Support",
          iconClass: "ri-question-answer-fill",
          colorClass: "color-extra06-style",
        },
        {
          title: "Digital Products",
          iconClass: "ri-image-2-fill",
          colorClass: "color-extra03-style",
          extraClass: "transformation-icon",
        },
        {
          title: "Enterprise",
          iconClass: "ri-shopping-bag-2-fill",
          colorClass: "color-extra01-style",
        },
        {
          title: "Blockchain",
          iconClass: "ri-money-dollar-box-fill",
          colorClass: "color-extra05-style",
        },
        {
          title: "AI",
          iconClass: "ri-lightbulb-flash-line",
          colorClass: "color-extra05-style",
        },
        {
          title: "Biometrics",
          iconClass: "ri-fingerprint-2-line",
          colorClass: "color-extra02-style",
        },
        {
          title: "CCTV",
          iconClass: "ri-tv-2-fill",
          colorClass: "color-extra01-style",
        },
        {
          title: "GPS",
          iconClass: "ri-signal-tower-line",
          colorClass: "color-extra04-style",
        },
        {
          title: "Barrier Gates",
          iconClass: "ri-barricade-line",
          colorClass: "color-extra03-style",
        },
      ],
    };
  },
};
</script>
