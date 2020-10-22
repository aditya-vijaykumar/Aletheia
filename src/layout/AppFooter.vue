<template>
  <footer class="footer">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">
            Thank you for checking out our project!
          </h3>
          <h4 class="mb-0 font-weight-light">
            We'd love to hear from you! Get in touch with us if you have any
            suggestions or feedback.
          </h4>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/creativetim"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>

          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/creativetimofficial"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Star on Github"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener"
              >Aditya Vijaykumar</a
            >
            &amp;
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener"
              >Anshul Rai</a
            >.
            <small>Template by Creative Tim.</small>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                href="https://github.com/aditya-vijaykumar/Aletheia"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >GitHub</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://ethonline.io"
                class="nav-link"
                target="_blank"
                rel="noopener"
                >ETHOnline</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>