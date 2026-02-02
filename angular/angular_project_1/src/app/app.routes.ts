import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Aboutus } from './components/aboutus/aboutus';
import { Careers } from './components/careers/careers';
import { Contactus } from './components/contactus/contactus';
import { Notfound } from './components/notfound/notfound';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { UserDetails } from './components/user-details/user-details';
import { ProductDetails } from './components/product-details/product-details';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { trainerGuard } from './guards/trainer-guard';
import { nareshITStudentGuard } from './guards/naresh-itstudent-guard';
import { placementGuard } from './guards/placement-guard';
import { hasChangesGuard } from './guards/has-changes-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  {
    path: 'careers',
    component: Careers,
    children: [
      // { path: '', redirectTo: 'contract', pathMatch: 'full' },
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
    canActivate: [nareshITStudentGuard],
    canActivateChild: [placementGuard]
  },
  {
    path: 'contactus',
    component: Contactus,
    canDeactivate: [hasChangesGuard]
  },
  { path: 'users', component: UserList },
  { path: 'userdetails/:id', component: UserDetails },
  { path: 'products', component: ProductList },
  { path: 'productdetails', component: ProductDetails },
  {
    path: 'uploadvideos',
    component: UploadVideos,
    canActivate: [trainerGuard]
  },
  { path: '**', component: Notfound },
];
