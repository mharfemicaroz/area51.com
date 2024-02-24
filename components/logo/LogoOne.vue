<template>
  <div class="edu-brand-area brand-area-1 gap-top-equal">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="brand-section-heading">
            <SectionTitle
              preTitle="Our Partners"
              title="Learn with Our Partners"
              alignment="section-left"
              subTitle="Explore collaborative learning opportunities and grow with the expertise of our distinguished partners."
            />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="brand-grid-wrap">
            <div class="brand-grid">
              <img src="/images/brand/1.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/2.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/3.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/4.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/5.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/6.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/7.png" alt="Brand Logo" />
            </div>
            <div class="brand-grid">
              <img src="/images/brand/8.png" alt="Brand Logo" />
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
};
</script>
