import {Component, ViewChildren, ElementRef, ViewChild, QueryList} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})
export class AutocompleteSimpleExample {

  blogForm = this.fb.group({
    category: ['', Validators.required],
    subcategory: ['', Validators.required],
  });

  categorySaved = false;
  formGuardada = false;

  options: string[] = ['One', 'Two', 'Three'];
  optionsSubcategory: string[] = [];

  optionsOne: string[] = ['One 1', 'One 2', 'One 3'];
  optionsTwo: string[] = ['Two 1', 'Two 2', 'Two 3'];
  optionsThree: string[] = ['Three 1', 'Three 2', 'Three 3'];

  constructor(private fb: FormBuilder) {}

  log() {
    this.categorySaved = false;
  }

   subcategoryOptions(selectedCategory: string): string[] {
    switch(selectedCategory) {
      case('One'):
        return this.optionsOne;
        break;
      case('Two'):
        return this.optionsTwo;
        break;
      case('Three'):
        return this.optionsThree;
        break;
      default:
        return [];
        break;
    }
  }

  guardarCambios() {
    this.formGuardada = true;
    const resultado = this.blogForm.value;
  }

  reset() {
    this.categorySaved = false;
    this.formGuardada = false;
    this.optionsSubcategory = [];
    this.blogForm.reset();
    this.blogForm.markAsPristine();
    this.blogForm.markAsUntouched();
    this.blogForm.updateValueAndValidity();
  }
}
