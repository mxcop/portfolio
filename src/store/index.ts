import { writable } from 'svelte/store';

export const repos = writable<Array<any> | undefined>(undefined);