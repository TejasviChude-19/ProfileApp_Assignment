import { Component } from '@angular/core';
import { Profile } from '../models/Profile.model';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

   
  profiles = [
    {
      id:1,
      name: 'John Doe',
      role: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverr.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:2,
      name: 'Jane Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8tusw5j5lPA75Cs7g-Such_ylT-2CnarpjxEW2Ul7qOghTWNFh7HBEWDPmDHAPuOEFI&usqp=CAU',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:3,
      name: 'Michael Johnson',
      role: 'Marketing Manager',
      description: 'Fusce gravida justo in ante scelerisque, id suscipit metus dapibus.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IrtgqBNO3bSBLVwhOPysNwRYz5SBoEUR6Q&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:4,
      name: 'Micle Starck',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1xWd6F43TWRndAPgysTujX9S_GNBrDu0ZQ&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:5,
      name: 'jeemy Smith',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s',
      location: {

        lat: 40.7128, 
        lng: -74.0060  
      }
    },
    {
      id:6,
      name: 'jany Clark',
      role: 'UX Designer',
      description: 'Nullam mattis tortor in libero ultrices, vel commodo velit lacinia.',
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7VZrCB-KmQ8lpburT-mcYkQ2Tk3blBeM3w&s',
      location: {
        lat: 40.7128, 
        lng: -74.0060  
      }
    },

  ];

  showMap = false;
  selectedProfile: Profile | null = null;
  filteredProfiles: Profile[] = [];
  searchTerm: string = '';

  constructor() {
    this.filteredProfiles = this.profiles; 
  }

  showProfileLocation(profile: Profile) {
    this.selectedProfile = profile;
    this.showMap = true;
  }

  searchProfiles() {
    if (!this.searchTerm.trim()) {
      this.filteredProfiles = this.profiles;
      console.log('No search term, displaying all profiles');
    } else {
     
      this.filteredProfiles = this.profiles.filter(profile =>
        profile.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        profile.role.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        profile.location.lat.toString().includes(this.searchTerm.trim()) ||
        profile.location.lng.toString().includes(this.searchTerm.trim())
      );
      console.log('Filtered profiles:', this.filteredProfiles);
    }
  }

  clearSearch() {
    this.searchTerm = ''; 
    this.filteredProfiles = []; 
  }
}

