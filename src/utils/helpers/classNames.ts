import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// using clsx library
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(...classes));
};
