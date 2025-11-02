"use client";
import { useSyncExternalStore } from "react";

const MOBILE_MAX_WIDTH = 1200;

let isMobileValue: boolean = false;
const listeners = new Set<() => void>();

// بررسی اینکه الان موبایل هست یا نه
const checkIsMobile = (): boolean => {
  if (typeof window === "undefined") return false; // سمت سرور
  return window.innerWidth < MOBILE_MAX_WIDTH;
};

// وقتی سایز صفحه تغییر کنه
const updateIsMobile = (): void => {
  const newValue = checkIsMobile();
  if (newValue !== isMobileValue) {
    isMobileValue = newValue;
    listeners.forEach((listener) => listener());
  }
};

// ثبت event listener
const subscribe = (listener: () => void) => {
  if (typeof window === "undefined") return () => {};
  listeners.add(listener);
  window.addEventListener("resize", updateIsMobile);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("resize", updateIsMobile);
  };
};


const getSnapshot = (): boolean => checkIsMobile();


const getServerSnapshot = (): boolean => false;


const useMobile = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMobile;