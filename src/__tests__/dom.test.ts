import { describe, it, expect, beforeEach } from 'vitest'
import { JSDOM } from 'jsdom'

describe('DOM Tests', () => {
  let dom: JSDOM
  let document: Document

  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Test</title>
      </head>
      <body>
        <div id="gateway-card">
          <button class="persona-btn" data-role="Admin">
            <i class="fas fa-shield-alt"></i>
            <span>Super Admin</span>
          </button>
          <button class="persona-btn" data-role="Owner">
            <i class="fas fa-chart-line"></i>
            <span>Fleet Owner</span>
          </button>
        </div>
        <script>
          function selectPersona(role, element) {
            document.querySelectorAll('.persona-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
          }
        </script>
      </body>
      </html>
    `)
    document = dom.window.document
  })

  it('should find persona buttons', () => {
    const buttons = document.querySelectorAll('.persona-btn')
    expect(buttons).toHaveLength(2)
  })

  it('should have correct data roles', () => {
    const adminBtn = document.querySelector('[data-role="Admin"]')
    const ownerBtn = document.querySelector('[data-role="Owner"]')
    
    expect(adminBtn).toBeTruthy()
    expect(ownerBtn).toBeTruthy()
    expect(adminBtn?.querySelector('span')?.textContent).toBe('Super Admin')
  })

  it('should handle button interactions', () => {
    const adminBtn = document.querySelector('[data-role="Admin"]') as HTMLElement
    const ownerBtn = document.querySelector('[data-role="Owner"]') as HTMLElement
    
    // Simulate selectPersona function
    function selectPersona(role: string, element: HTMLElement) {
      document.querySelectorAll('.persona-btn').forEach(btn => btn.classList.remove('active'))
      element.classList.add('active')
    }
    
    selectPersona('Admin', adminBtn)
    
    expect(adminBtn.classList.contains('active')).toBe(true)
    expect(ownerBtn.classList.contains('active')).toBe(false)
  })
})