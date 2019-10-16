import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-save-product-modal',
  templateUrl: './save-product-modal.component.html',
  styleUrls: ['./save-product-modal.component.css']
})
export class SaveProductModalComponent implements OnInit {
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() { }

  close() {
    this.modal.dismiss();
  }

  saveProduct(canSave: boolean) {
    this.modal.close(canSave);
  }
}
