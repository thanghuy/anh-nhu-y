import type { CSSProperties } from 'react'

interface SplitWordsProps {
  text: string
  // Index of the first word, so several runs in one heading keep one continuous stagger
  start?: number
  className?: string
}

// Wraps each word in a `.word` span; global.css flips them in once an ancestor `[data-reveal]` is visible.
export function SplitWords({ text, start = 0, className }: SplitWordsProps) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="word" style={{ '--i': start + i } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
