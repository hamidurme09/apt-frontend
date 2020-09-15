import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'agent-modal',
  styleUrl: 'agent-modal.scss'
})
export class AgentModal {
  @Element() el: HTMLElement;
  @Prop() component!: string;
  @Prop() componentProps: any = {};

  closeModal() {
    const modal: any = this.el.closest('ion-modal');
    if (modal) {
      modal.dismiss();
    }
  }

  componentDidLoad() {
    const injectedComponent: any = Object.assign(document.createElement(this.component), this.componentProps);
    this.el.querySelector('.modal-content').appendChild(injectedComponent);
  }

  render() {

    return (
      <ion-content class="agent-modal">
        <div class="modal-content" />

        <button aria-label="close" class="close button-reset" onClick={() => this.closeModal()}>
          <img src="/assets/images/icons/cancel.svg" />
        </button>
      </ion-content>
    )
  }
}
