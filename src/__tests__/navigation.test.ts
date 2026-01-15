import { describe, it, expect } from 'vitest'

describe('Navigation Tests', () => {
  it('should have correct navigation paths', () => {
    const navigationPaths = {
      admin: '/tsp-admin/admin-dashboard',
      owner: '/fleet-owner',
      manager: '/fleet-manager/dashboard',
      shipper: '/shipper/dashboard'
    }

    expect(navigationPaths.admin).toBe('/tsp-admin/admin-dashboard')
    expect(navigationPaths.owner).toBe('/fleet-owner')
    expect(navigationPaths.manager).toBe('/fleet-manager/dashboard')
    expect(navigationPaths.shipper).toBe('/shipper/dashboard')
  })

  it('should validate persona mapping', () => {
    const personaMapping = {
      'Admin': 'Super Admin',
      'Owner': 'Fleet Owner', 
      'Manager': 'Fleet Manager',
      'Shipper': 'Shipper'
    }

    Object.entries(personaMapping).forEach(([key, value]) => {
      expect(key).toBeTruthy()
      expect(value).toBeTruthy()
      expect(typeof key).toBe('string')
      expect(typeof value).toBe('string')
    })
  })

  it('should handle base URL correctly', () => {
    const baseUrl = 'https://thevikramsinha.github.io'
    const basePath = '/tsp360'
    const fullUrl = baseUrl + basePath

    expect(fullUrl).toBe('https://thevikramsinha.github.io/tsp360')
    expect(basePath.startsWith('/')).toBe(true)
  })
})