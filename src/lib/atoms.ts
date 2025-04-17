import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const contentAtom = atom("");
export const wordWrapAtom = atomWithStorage("word-wrap", false);
export const fontSizeAtom = atomWithStorage("font-size", 16);
