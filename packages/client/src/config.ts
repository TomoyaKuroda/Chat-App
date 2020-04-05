import { User } from "./lib/types";

export let me: User | null = null;

export const setMe = (user: User) => (me = user);
export const getMe = () => me;
