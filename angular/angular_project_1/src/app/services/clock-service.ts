import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private format24Hour = true;
  private paused = false;
  private intervalId: any = null;
  private currentTime: string = '';
  private listeners: ((time: string) => void)[] = [];
  
  constructor() {
    this.start();
  }
  private start() {
    this.intervalId = setInterval(() => {
      if (!this.paused) {
        this.currentTime = this.getFormattedTime();
        this.notifyListeners();
      }
    }, 1000);
  }
  private getFormattedTime(): string {
    const now = new Date();
    if (this.format24Hour) {
      return now.toLocaleTimeString('en-GB'); // 24-hour
    } else {
      return now.toLocaleTimeString('en-US'); // 12-hour
    }
  }
  onTick(callback: (time: string) => void) {
    this.listeners.push(callback);
    callback(this.currentTime); // send immediately
  }
  private notifyListeners() {
    this.listeners.forEach(cb => cb(this.currentTime));
  }
  toggleFormat() {
    this.format24Hour = !this.format24Hour;
  }
  pause() {
    this.paused = true;
  }
  resume() {
    this.paused = false;
  }
  getTodayDate(): string {
    return new Date().toLocaleDateString();
  }
}
