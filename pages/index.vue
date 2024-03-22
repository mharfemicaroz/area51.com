<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderThree showHeaderTop="true" />

    <Banner />

    <Categories />

    <Course />

    <LogoOne />

    <Instructor />

    <FunFact />

    <FAQ />

    <!-- <Event extraClass="event-area-2" /> -->

    <VideoSection />

    <ContactInfo />

    <!-- <Blog /> -->

    <div class="google-map-area mt-4">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Door+2,+Zamoras+Building,+Glodo+St.+San+Francisco,+Panabo+City,+Davao+del+Norte&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>

    <FooterOne />
  </div>
</template>

<script>
export default {
  components: {
    HeaderThree: () => import("@/components/header/HeaderThree"),
    VideoSection: () => import("@/components/home-university/Video"),
    Banner: () => import("@/components/home-online-academy/Banner"),
    Categories: () => import("@/components/home-online-academy/Categories"),
    Course: () => import("@/components/home-online-academy/Course"),
    LogoOne: () => import("@/components/logo/LogoOne"),
    Instructor: () => import("@/components/home-online-academy/Instructor"),
    FunFact: () => import("@/components/home-online-academy/FunFact"),
    FAQ: () => import("@/components/home-online-academy/FAQ"),
    Event: () => import("@/components/event/EventSectionOne"),
    ContactInfo: () => import("@/components/home-online-academy/ContactInfo"),
    Blog: () => import("@/components/home-online-academy/Blog"),
    CTA: () => import("@/components/cta/CTAOne"),
    FooterOne: () => import("@/components/footer/FooterOne"),
  },
  head() {
    return {
      title: "Online Academy",
    };
  },
};
</script>
