import deepFreeze from './deepFreeze'
import { expect, test, describe } from 'vitest'

const deepFreeze = require('./deepFreeze')

describe('deepFreeze', () => {
    test('should be a function', () => {
        expect(typeof deepFreeze).toBe('function')
    })

    test('should return an object', () => {
        expect(typeof deepFreeze({})).toBe('object')
    })

    test('should be immutable', () => {
        const obj = { a: 1 }
        deepFreeze(obj)
        expect(() => obj.a = 2).toThrow(TypeError)
    })

    test('should be recursively immutable', () => {
        const obj = { a: { b: 1 } }
        deepFreeze(obj)
        
        expect(() => obj.a.b = 2).toThrow(TypeError)
    })

    test('should be frozen', () => {
        const obj = { a: 1 }
        deepFreeze(obj)
        expect(Object.isFrozen(obj)).toBe(true)
    })

    test('should be deep frozen', () => {
        const obj = { a: { b: 1 } }
        deepFreeze(obj)
        expect(Object.isFrozen(obj.a)).toBe(true)
    })
})