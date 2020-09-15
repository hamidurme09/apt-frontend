import { Component, h } from "@stencil/core";

@Component({
  tag: "work-with-agent",
  styleUrl: "work-with-agent.scss",
})

export class WorkWithAgent {

  render() {

    return (
      <div class="work-with-agent-component">
        <work-with-agent-form />
      </div>
    );
  }
}
