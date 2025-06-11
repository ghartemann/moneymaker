/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
    },
    resolve: {
        alias: {
            '~': resolve(__dirname)
        }
    }
}); 