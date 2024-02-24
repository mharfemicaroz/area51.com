<template>
  <footer class="edu-footer footer-dark bg-image footer-style-2">
    <div class="footer-top footer-top-2">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <div class="edu-footer-widget">
              <div class="logo">
                <n-link to="/">
                  <img
                    class="logo-dark"
                    src="/images/logo/logo-white.png"
                    alt="Light Logo"
                  />
                </n-link>
              </div>
              <p class="description">
                Dedicated to providing top-tier IT support and solutions to
                businesses across various sectors. Our mission is to ensure your
                technology drives your business forward.
              </p>
              <div class="widget-information">
                <ul class="information-list">
                  <li><span>Add:</span>Panabo City, Dava del Norte</li>
                  <li>
                    <span>Call:</span
                    ><a href="tel:+639177621021">+639177621021</a>
                  </li>
                  <li>
                    <span>Email:</span
                    ><a href="mailto:cloydcunanan@gmail.com" target="_blank"
                      >cloydcunanan@gmail.com</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="edu-footer-widget explore-widget">
              <h4 class="widget-title">Online Platform</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li><n-link to="/about-us">About Us</n-link></li>
                  <li><n-link to="/services">IT Services</n-link></li>
                  <li><n-link to="/solutions">Solutions</n-link></li>
                  <li><n-link to="/case-studies">Case Studies</n-link></li>
                  <li><n-link to="/blog">Blog</n-link></li>
                  <li><n-link to="/contact">Contact Us</n-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="edu-footer-widget quick-link-widget">
              <h4 class="widget-title">Links</h4>
              <div class="inner">
                <ul class="footer-link link-hover">
                  <li><n-link to="/faq">FAQ's</n-link></li>
                  <li><n-link to="/gallery-grid">Gallery</n-link></li>
                  <li>
                    <n-link to="/blog/blog-standard">News & Articles</n-link>
                  </li>
                  <li><n-link to="/privacy-policy">Privacy Policy</n-link></li>
                  <li><n-link to="/my-account">Sign In</n-link></li>
                  <li><n-link to="/contact-us">Contact Us</n-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="edu-footer-widget">
              <h4 class="widget-title">Contacts</h4>
              <div class="inner">
                <p class="description">
                  Enter your email address to register to our newsletter
                  subscription
                </p>
                <div class="input-group footer-subscription-form">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                  />
                  <button class="edu-btn btn-medium" type="button">
                    Subscribe <i class="icon-4"></i>
                  </button>
                </div>
                <ul class="social-share icon-transparent">
                  <li>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      class="color-fb"
                      ><i class="icon-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      class="color-linkd"
                      ><i class="icon-linkedin2"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      class="color-ig"
                      ><i class="icon-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      class="color-twitter"
                      ><i class="icon-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/"
                      target="_blank"
                      class="color-yt"
                      ><i class="icon-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner text-center">
              <p>
                Copyright {{ new Date().getFullYear() }}
                <a href="#">Area 51</a> Designed By
                <a href="#" target="_blank">Area 51</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
