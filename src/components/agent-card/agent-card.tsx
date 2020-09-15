import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "agent-card",
  styleUrl: "agent-card.scss",
})

export class AgentCard {
  @Prop() contentPadding: boolean = false;

  render() {

    return [
      <div class="agent-card">
        <maintain-ratio width={322} height={182}>
          <lazy-image
            src="/assets/images/agent-page/list-img.png"
            class="agent-feature-image"
            alt="neighborhood name"
          />
        </maintain-ratio>

        <div class={{ "agent-content-padding": this.contentPadding }}>
          <h4 class="agent-title">East Village</h4>

          <div class="price">1400 per month</div>

          <div class="bed-bath">
            
            <div>
              <lazy-image
                src="/assets/images/icons/bedroom.svg"
                class="bedrooms"
                alt="bedroom"
              />{" "}

              3 Bedroom
            </div>

            <div class="divider">
              |
            </div>

            <div>
              <lazy-image
                src="/assets/images/icons/bathroom.svg"
                class="bathrooms"
                alt="bathroom"
              />{" "}
              3 Bathroom
            </div>
          </div>

          <div class="agent-rating-amenities">
            <div class="star-rating">

              <star-rating
                stars={5}
                size={16}
                rating={4}
                readonly
                color="#f3b445"
              />

              </div>

            <div class="agent-amenities">Elevator</div>
          </div>
        </div>
      </div>,
    ];
  }
}
