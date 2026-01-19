import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDark = false;
  getTheme(): boolean {
    return this.isDark;
  }
  toggleTheme(): void {
    this.isDark = !this.isDark;
  }
}
