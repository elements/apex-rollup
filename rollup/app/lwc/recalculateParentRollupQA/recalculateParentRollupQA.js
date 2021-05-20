import { api, LightningElement } from 'lwc';

export default class RecalculateParentRollupQA extends LightningElement {
  @api
  recordId;

  isRecalculating = false;

  @api invoke() {
    this.isRecalculating = true;
    console.log(this.recordId);

    setTimeout(() => {
      this.isRecalculating = false;
    }, 5000)
  }
}