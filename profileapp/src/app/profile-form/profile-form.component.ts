import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../models/Profile.model';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent { 
  @Input() profile: Profile | undefined;

  Form!: FormGroup;


constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      name: [this.profile?.name || '', Validators.required],
      role: [this.profile?.role || '', Validators.required],
      description: [this.profile?.description || '', Validators.required],
      photoUrl: [this.profile?.photoUrl || '', Validators.required],
      location: this.formBuilder.group({
        lat: [this.profile?.location.lat || 0, Validators.required],
        lng: [this.profile?.location.lng || 0, Validators.required]
      })
    });
  }


  onSubmit(): void {
     
  }
}

