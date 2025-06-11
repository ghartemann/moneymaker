import { describe, it, expect, vi } from 'vitest';
import useFormat from '../composables/format';

// Mock the currencies module
vi.mock('../constants/currencies.js', () => ({
    default: {
        cadToEur: 0.68,
        usdToEur: 0.92,
        gbpToEur: 1.17
    }
}));

describe('useFormat', () => {
    const format = useFormat();

    describe('formatHours', () => {
        it('should format seconds correctly', () => {
            expect(format.formatHours(0.0083)).toEqual(['29 seconds']);
        });

        it('should format minutes correctly', () => {
            expect(format.formatHours(0.0833)).toEqual(['4 minutes', '59 seconds']);
        });

        it('should format hours correctly', () => {
            expect(format.formatHours(2)).toEqual(['2 hours']);
        });

        it('should format days correctly', () => {
            expect(format.formatHours(24)).toEqual(['1 day']);
        });

        it('should format weeks correctly', () => {
            expect(format.formatHours(168)).toEqual(['1 week']);
        });

        it('should format months correctly', () => {
            expect(format.formatHours(730)).toEqual(['1 month']);
        });

        it('should format years correctly', () => {
            expect(format.formatHours(8760)).toEqual(['1 year']);
        });

        it('should handle complex durations', () => {
            expect(format.formatHours(8770)).toEqual(['1 year', '10 hours']);
        });

        it('should handle roughly flag for large durations', () => {
            expect(format.formatHours(8770, false, true)).toEqual(['~', '1 year']);
        });
    });

    describe('formatNumber', () => {
        it('should format currency correctly', () => {
            expect(format.formatNumber(1234.56)).toBe('€1,234.56');
        });

        it('should handle integers', () => {
            expect(format.formatNumber(1000)).toBe('€1,000');
        });

        it('should handle large numbers', () => {
            expect(format.formatNumber(1000000, 2)).toBe('€1,000,000.00');
        });
    });

    describe('formatNumberNice', () => {
        it('should format small numbers normally', () => {
            expect(format.formatNumberNice(999)).toBe('999');
        });

        it('should format millions with M suffix', () => {
            expect(format.formatNumberNice(1500000)).toBe('1.5 M');
        });

        it('should format billions with B suffix', () => {
            expect(format.formatNumberNice(1500000000)).toBe('1.5 B');
        });
    });

    describe('convertCurrency', () => {
        it('should convert USD to EUR', () => {
            expect(format.convertCurrency(100, 'USD')).toBe(92);
        });

        it('should convert CAD to EUR', () => {
            expect(format.convertCurrency(100, 'CAD')).toBe(68);
        });

        it('should convert GBP to EUR', () => {
            expect(format.convertCurrency(100, 'GBP')).toBe(117);
        });

        it('should return same value for EUR', () => {
            expect(format.convertCurrency(100, 'EUR')).toBe(100);
        });

        it('should handle undefined currency', () => {
            expect(format.convertCurrency(100)).toBe(100);
        });

        it('should handle unknown currency', () => {
            expect(format.convertCurrency(100, 'XYZ')).toBe(100);
        });
    });
}); 