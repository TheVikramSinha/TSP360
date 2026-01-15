import { describe, it, expect } from 'vitest'

describe('Basic Tests', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle string operations', () => {
    const greeting = 'Hello, Falcon Fleet!'
    expect(greeting).toContain('Falcon Fleet')
    expect(greeting.length).toBeGreaterThan(0)
  })

  it('should work with arrays', () => {
    const personas = ['Admin', 'Owner', 'Manager', 'Shipper']
    expect(personas).toHaveLength(4)
    expect(personas).toContain('Admin')
  })
})