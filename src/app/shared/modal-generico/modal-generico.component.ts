import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-generico',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, AutoCompleteModule, InputNumberModule, DropdownModule, FormsModule, CommonModule],
  templateUrl: './modal-generico.component.html',
  styleUrl: './modal-generico.component.css'
})

export class ModalGenericoComponent implements OnInit {
  @Input() titulo: string = 'Edit'; 
  @Input() campos: any[] = []; 
  formData: any = {};

  @Output() onSave = new EventEmitter<any>(); // Emit the form data when saving
  @Output() onCancel = new EventEmitter<void>(); // Emit when modal is cancelled

  visible: boolean = false;

  showModal(data:any) {
    this.visible = true;
    this.formData = data;
  }

  save() {
    this.onSave.emit(this.formData); // Emit the form data when saving
    this.visible = false;
  }

  cancel() {
    this.onCancel.emit(); // Emit an event when cancelling
    this.visible = false;
  }
  ngOnInit(): void {
    console.log(this.campos)
  }
}
