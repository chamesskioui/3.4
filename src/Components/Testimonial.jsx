import React from 'react'

function Testimonial() {
  return (
    <div><section className="py-12 py-lg-24 position-relative overflow-hidden">
    <img
      className="position-absolute top-0 end-0"
      src="saturn-assets/images/testimonials/orange-light.png"
      alt=""
    />
    <div className="container position-relative">
      <div className="mw-lg mx-auto mw-lg-none">
        <div className="row align-items-center mb-16">
          <div className="col-lg-7 mb-8 mb-lg-0">
            <h3 className="mw-xl font-heading mb-0">
              <span>Our</span>
              <span
                style={{
                  fontFamily:
                    '"Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman"'
                }}
              >
                happy
              </span>
              <span>clients says about us</span>
            </h3>
          </div>
          <div className="col-lg-5">
            <p className="mw-md ms-lg-auto text-secondary mb-0">
              Risus viverra justo sagittis vestibulum metus. Massa lacinia eros
              posuere cursus sed vestibulum massa gravida. Turpis volutpat
              faucibus hac sed suspendisse convallis vestibulum massa.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 col-xl-6 mb-8 mb-lg-0">
            <img
              className="img-fluid d-block w-100"
              src="saturn-assets/images/testimonials/men-photo.png"
              alt=""
            />
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="mw-lg ms-lg-auto">
              <img
                className="img-fluid d-block mb-8"
                src="saturn-assets/images/testimonials/quote.svg"
                alt=""
              />
              <p className="fs-5 fw-semibold mb-6">
                “They are able to help a startup like mine scale and are very
                responsive to all our unique needs”
              </p>
              <span className="d-block fs-7 fw-semibold mb-1">
                — Yacob Sudarmaji
              </span>
              <span className="d-block text-secondary mb-10">
                Product Manager, XYZ Tech
              </span>
              <div>
                <button
                  className="btn me-3 p-0 btn-primary rounded-pill"
                  style={{ width: 12, height: 12 }}
                />
                <button
                  className="btn me-3 p-0 btn-light rounded-pill"
                  style={{ width: 12, height: 12 }}
                />
                <button
                  className="btn me-3 p-0 btn-light rounded-pill"
                  style={{ width: 12, height: 12 }}
                />
                <button
                  className="btn me-3 p-0 btn-light rounded-pill"
                  style={{ width: 12, height: 12 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Testimonial
