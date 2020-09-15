import { Component, h } from "@stencil/core";

@Component({
  tag: "work-with-agent-form",
  styleUrl: "work-with-agent-form.scss",
})

export class WorkWithAgentForm {

  render() {
    
    return (
      <form class="work-with-agent-form-component">
        
        <div class="agent-form-title">
          <h2>Work with Sophia William</h2>
        </div>

        <p class="agent-form-description">
          We are available to assist every step of the way insuring you have a
          seamless transaction.
        </p>

        <div class="agent-form-address">

          <div>
            <label htmlFor="agent-form-inquiry-name">Full Name</label>
            <input
              id="agent-form-inquiry-name"
              type="text"
              name="name"
              class="text-input"
            />
          </div>

          <div>
            <label htmlFor="agent-form-inquiry-email">Email</label>
            <input
              id="agent-form-inquiry-email"
              type="email"
              name="email"
              class="text-input"
            />
          </div>

          <div>
            <label htmlFor="agent-form-inquiry-phone">Phone</label>
            <input
              id="agent-form-inquiry-phone"
              type="text"
              name="phone"
              class="text-input"
            />
          </div>

        </div>

        <p class="agent-form-interested">I am interested in:</p>

        <div class="agent-form-radiobuttons-container">

          <label htmlFor="buy" class="agent-form-radio">
            <input
              id="buy"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="buy"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">Buy</span>
          </label>

          <label htmlFor="rent" class="agent-form-radio">
            <input
              id="rent"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="rent"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">Rent</span>
          </label>

          <label htmlFor="rent-furnished" class="agent-form-radio">
            <input
              id="rent-furnished"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="rent-furnished"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">
              Rent&nbsp;Furnished
            </span>
          </label>

          <label htmlFor="sell" class="agent-form-radio">
            <input
              id="sell"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="sell"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">Sell</span>
          </label>

          <label htmlFor="list" class="agent-form-radio">
            <input
              id="list"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="list"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">List</span>
          </label>

          <label htmlFor="other" class="agent-form-radio">
            <input
              id="other"
              class="agent-form-radio__button"
              type="checkbox"
              name="interested"
              value="other"
            />
            <span class="agent-form-check"></span>
            <span class="agent-form-radio__label">Other</span>
          </label>

        </div>

        <div>
          <p class="tell-us-more">Tell Us More</p>

          <textarea
            id="inquiry-message"
            name="message"
            class="text-input textarea"
          />
        </div>

        <div class="input submit">
          <input
            type="submit"
            value="Submit"
            class="button-dark block btnSubmit"
          />
        </div>

      </form>
    );
  }
}
