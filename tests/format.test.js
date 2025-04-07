import { expect, test } from 'vitest'
import useFormat from '../composables/format.js'

test('formatPrice', () => {
    expect(useFormat().formatPrice(123456789)).toBe('€123,456,789.00');
    expect(useFormat().formatPrice(123456789.123)).toBe('€123,456,789.12');
});