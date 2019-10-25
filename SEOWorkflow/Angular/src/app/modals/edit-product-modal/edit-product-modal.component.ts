import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent implements OnInit {
  @Input() productSeoStatus;
  
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() { }

  close() {
    this.modal.dismiss();
  }

  editProduct(canEdit: boolean) {
    this.modal.close(canEdit);
  }
}
