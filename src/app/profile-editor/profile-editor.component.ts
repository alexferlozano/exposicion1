import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl(''),
    direccion : new FormGroup({
      calle: new FormControl(''),
      ciudad: new FormControl(''),
      estado: new FormControl(''),
      CP: new FormControl('')
    }),
    aliases: new FormArray([
      new FormControl('')
    ])
  })
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor() { }
  /* Acepta un objeto con nombres de control como claves y hace todo lo posible 
  para hacer coincidir los valores con los controles correctos en el grupo. */
  updateProfile() {
    this.profileForm.patchValue({
      nombre: 'Selena',
      direccion: {
        calle: '123 Drew Street'
      }
    });
  }

  /* Inserta un nuevo AbstractControl al final de un arreglo. */
  addAlias() {
    this.aliases.push(new FormControl(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  } 

  /*profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: [''],
    direccion: this.fb.group({
      calle: [''],
      ciudad: [''],
      estado: [''],
      CP: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      nombre: 'Selena',
      direccion: {
        calle: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  } */
}