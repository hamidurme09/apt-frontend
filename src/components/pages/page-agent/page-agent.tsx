import { Component, h, Prop, State } from "@stencil/core";
import { Store } from "@stencil/redux";

import { ModalService } from "../../../services/modal.service";

@Component({
  tag: "page-agent",
  styleUrl: "page-agent.scss",
})

export class PageAgent {
  @Prop({ context: "store" }) store: Store;
  @State() size: string = "phone-only";
  @State() isMobile: boolean = true;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        screenSize: { size, isMobile },
      } = state;

      return {
        size,
        isMobile,
      };
    });
  }

  render() {

    return [

      <ion-content class="page-agent">
        <app-header-home hide-search-button />

        <section class="section">
          <div class="section-agent">
            <div class="agent-left">
              
              <lazy-image
                src="/assets/images/agent-page/business-woman.png"
                alt="background image"
                class="imageAgent"
              />

              {
                this.size !== "phone-only" ? (
                  <ion-button color="#fff">
                    Watch Video

                    <svg
                      class="watch-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g fill="#131414">
                          <g>
                            <g>
                              <path
                                d="M110 0L118.539 4.96 127 9.999 118.539 14.96 110 20z"
                                transform="translate(-447 -587) translate(100 552) translate(237 35)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>

                  </ion-button>
                ) : (
                  ""
                )
              }
            </div>

            <div class="agent-right">
              <div class="agent-right-person">
                <h2>Sophia William</h2>
                <p>Licensed Real Estate Sales Person</p>
              </div>

              <div class="agent-right-descriptionTop">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <p>
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was populari
                </p>
              </div>

              {
                this.size == "phone-only" ? (
                  <ion-button color="#fff">
                    Watch Video
                    <svg
                      class="watch-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g fill="#131414">
                          <g>
                            <g>
                              <path
                                d="M110 0L118.539 4.96 127 9.999 118.539 14.96 110 20z"
                                transform="translate(-447 -587) translate(100 552) translate(237 35)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </ion-button>
                ) : (
                  ""
                )
              }

              <div class="workButton">

                <button
                  aria-label="Work With Sophia"
                  class="workBtn"
                  onClick={() => ModalService.WorkWithAgent()}
                >
                  Work With Sophia
                </button>

              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2 class="agent-card-header">Sophia William’s Listings</h2>

          <div>
            <h2 class="agent-card-title">Sales Listings</h2>

            {
              this.isMobile ? (
                <agent-slider items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              ) : (
                <agent-list items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              )
            }
          </div>

          <div class="agent-card-mt">
            <h2 class="agent-card-title">Rentals Listings</h2>

            {
              this.isMobile ? (
                <agent-slider items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              ) : (
                <agent-list items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              )
            }
          </div>

          <div class="agent-card-mt">
            <h2 class="agent-card-title">Furnished Apartments Listings</h2>
            
            {
              this.isMobile ? (
                <agent-slider items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              ) : (
                <agent-list items={[1, 2, 3, 4, 5, 6, 7, 8]} />
              )
            }
          </div>
        </section>

        <h2 class="agent-card-recentTransaction">
          Sophia William’s Recent Transactions
        </h2>

        <section class="section">
          {
            this.isMobile ? (
              <agent-slider items={[1, 2, 3, 4, 5, 6, 7, 8]} />
            ) : (
              <agent-list items={[1, 2, 3, 4, 5, 6, 7, 8]} />
            )
          }

          <div class="workButton">

            <button
              aria-label="Work With Sophia"
              class="workBtn"
              onClick={() => ModalService.WorkWithAgent()}
            >
              Work With Sophia
            </button>

          </div>
        </section>

        <section class="section section-rating-review">

          <div class="rating-review">
            <h2 class="rating-review-header">Ratings &#38; Reviews</h2>

            <p class="all-review">All Reviews</p>

            {
              [1, 2].map((_) => (
                <div class="review">
                  <div class="star-date">
                    <div class="star-rating">

                      <star-rating
                        stars={5}
                        size={25}
                        rating={4}
                        readonly
                        color="#131414"
                      />

                    </div>

                    <p class="date">June 7, 2020</p>
                  </div>

                  <h2 class="recommend">
                    Highly <span>recommend</span>
                  </h2>

                  <p class="comment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. –
                    <span class="commenter">R.Kedmi. </span>
                  </p>
                </div>
              ))
            }

            <div class="load-more">
              <p>Load More Reviews </p>

              <img
                src="/assets/images/icons/arrow-right.png"
                alt="arrow-right"
                class="arrow-right"
              />
            </div>

            <div class="review-btn">
              <ion-button color="#fff">Write a Review</ion-button>
            </div>
          </div>
        </section>

        <app-footer />
      </ion-content>,
    ];
  }
}
