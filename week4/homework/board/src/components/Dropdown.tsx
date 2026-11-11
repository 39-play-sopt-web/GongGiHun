import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { cn } from '../utils/cn'

interface DropdownProps<T extends string> {
  label: string
  options: readonly T[]
  value: T | ''
  placeholder: string
  onChange: (value: T) => void
}

const Dropdown = <T extends string>({
  label,
  options,
  value,
  placeholder,
  onChange,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSelect = (options: T) => {
    onChange(options)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false)
      triggerRef.current?.focus()
    }
  }

  return (
    <div ref={containerRef} onKeyDown={handleKeyDown} className="relative flex-1">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-line bg-card px-4 py-3 outline-none focus-visible:border-mint"
      >
        <span className="sr-only">{label}: </span>
        <span className={cn(!value && 'text-muted')}>{value || placeholder}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cn('size-4 text-muted transition-transform', isOpen && 'rotate-180')}
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {isOpen && (
        <ul
          id={listId}
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-line bg-card"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                aria-current={option === value}
                onClick={() => handleSelect(option)}
                className={cn(
                  'w-full px-4 py-3 text-left outline-none hover:bg-line focus-visible:bg-line',
                  option === value && 'font-semibold text-mint',
                )}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
