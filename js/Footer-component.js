class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid">
      <div class="row">
          <div class="col-md-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos impedit voluptates tenetur velit
              doloribus, cupiditate autem quae aut aliquam cum maxime sunt laboriosam quasi itaque id tempore, harum
              architecto mollitia. Reprehenderit quidem magni
              nam saepe iure tempore voluptatem fuga! Consectetur unde architecto quisquam qui excepturi aliquam illum
              recusandae impedit? In doloremque mollitia fugit reprehenderit perspiciatis? Modi ipsam corporis id ut.
              Ratione,
              tempora saepe sapiente
              eveniet architecto, officia in pariatur optio perspiciatis a quam esse. Doloribus commodi nostrum qui
              maxime
              maiores, dolor labore blanditiis? Cupiditate a perferendis iure id repudiandae veritatis!
          </div>
          <div class="col-md-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos impedit voluptates tenetur velit
              doloribus, cupiditate autem quae aut aliquam cum maxime sunt laboriosam quasi itaque id tempore, harum
              architecto mollitia. Reprehenderit quidem magni
              nam saepe iure tempore voluptatem fuga! Consectetur unde architecto quisquam qui excepturi aliquam illum
              recusandae impedit? In doloremque mollitia fugit reprehenderit perspiciatis? Modi ipsam corporis id ut.
              Ratione,
              tempora saepe sapiente
              eveniet architecto, officia in pariatur optio perspiciatis a quam esse. Doloribus commodi nostrum qui
              maxime
              maiores, dolor labore blanditiis? Cupiditate a perferendis iure id repudiandae veritatis!
          </div>
          <div class="col-md-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos impedit voluptates tenetur velit
              doloribus, cupiditate autem quae aut aliquam cum maxime sunt laboriosam quasi itaque id tempore, harum
              architecto mollitia. Reprehenderit quidem magni
              nam saepe iure tempore voluptatem fuga! Consectetur unde architecto quisquam qui excepturi aliquam illum
              recusandae impedit? In doloremque mollitia fugit reprehenderit perspiciatis? Modi ipsam corporis id ut.
              Ratione,
              tempora saepe sapiente
              eveniet architecto, officia in pariatur optio perspiciatis a quam esse. Doloribus commodi nostrum qui
              maxime
              maiores, dolor labore blanditiis? Cupiditate a perferendis iure id repudiandae veritatis!
          </div>
          <div class="col-md-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos impedit voluptates tenetur velit
              doloribus, cupiditate autem quae aut aliquam cum maxime sunt laboriosam quasi itaque id tempore, harum
              architecto mollitia. Reprehenderit quidem magni
              nam saepe iure tempore voluptatem fuga! Consectetur unde architecto quisquam qui excepturi aliquam illum
              recusandae impedit? In doloremque mollitia fugit reprehenderit perspiciatis? Modi ipsam corporis id ut.
              Ratione,
              tempora saepe sapiente
              eveniet architecto, officia in pariatur optio perspiciatis a quam esse. Doloribus commodi nostrum qui
              maxime
              maiores, dolor labore blanditiis? Cupiditate a perferendis iure id repudiandae veritatis!
          </div>
      </div>
  </div>
      `;
  }
}

window.customElements.define("footer-component", Footer);
