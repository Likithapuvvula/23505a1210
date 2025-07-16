import { nanoid } from 'nanoid';

export function generateShortcode(length = 6) {
  return nanoid(length);
}
