import { Component, h, Prop } from "@stencil/core";
import { RouterService } from "../../services/router.service";

@Component({
  tag: "agent-list",
  styleUrl: "agent-list.scss",
})
export class AgentList {
  @Prop() items: any[] = [];

  render() {
    return [
      <div class="agent-list">
        <div class="agent-wrapper">
          {
            this.items.map((_) => (
              <agent-card />
            ))
          }
        </div>
        
        <ion-router-link
          href={RouterService.getRoute("search")}
          class="show-all"
        >
          Show All &#62;
        </ion-router-link>
      </div>,
    ];
  }
}
