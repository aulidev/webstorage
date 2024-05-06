import { describe, expect, it } from 'vitest';

import { localStorage } from './index';

describe('localStorage', () => {
	it('should get an item from localStorage', () => {
		// Arrange
		const key = 'testKey';
		const value = 'testValue';
		localStorage.setItem(key, value);

		// Act
		const result = localStorage.getItem(key);

		// Assert
		expect(result).toBe(value);
	});

	it('should set an item in localStorage', () => {
		// Arrange
		const key = 'testKey';
		const value = 'testValue';

		// Act
		localStorage.setItem(key, value);

		// Assert
		expect(localStorage.getItem(key)).toBe(value);
	});

	it('should remove an item from localStorage', () => {
		// Arrange
		const key = 'testKey';
		const value = 'testValue';
		localStorage.setItem(key, value);

		// Act
		localStorage.removeItem(key);

		// Assert
		expect(localStorage.getItem(key)).toBeNull();
	});

	it('should clear all items from localStorage', () => {
		// Arrange
		const key1 = 'testKey1';
		const value1 = 'testValue1';
		const key2 = 'testKey2';
		const value2 = 'testValue2';
		localStorage.setItem(key1, value1);
		localStorage.setItem(key2, value2);

		// Act
		localStorage.clear();

		// Assert
		expect(localStorage.getItem(key1)).toBeNull();
		expect(localStorage.getItem(key2)).toBeNull();
	});
});
