import { useMemo, useState } from 'react'
import { categoryColor } from '../lib/theme'

function StatusPill({ status }) {
  const live = status === 'In field'
  return (
    <span className={`status ${live ? 'status-live' : 'status-done'}`}>
      {live && <span className="dot" />}
      {status}
    </span>
  )
}

export default function TopicList({ topics, onSelect }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(topics.map((t) => t.category)))],
    [topics],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return topics.filter((t) => {
      const matchesCat = category === 'All' || t.category === category
      const matchesQ =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.headline.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      return matchesCat && matchesQ
    })
  }, [topics, query, category])

  const totalResponses = topics.reduce((s, t) => s + t.respondents, 0)

  return (
    <div className="list-page">
      <section className="hero">
        <h1>OnePulse Research Library</h1>
        <p className="hero-sub">
          Explore every survey Hard Carry Media has run. Pick a topic to see the full
          results and the key insights our OnePulse research generated.
        </p>
        <div className="hero-stats">
          <div className="hstat">
            <span className="hstat-num">{topics.length}</span>
            <span className="hstat-label">Topics run</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">{totalResponses.toLocaleString()}</span>
            <span className="hstat-label">Total responses</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">{categories.length - 1}</span>
            <span className="hstat-label">Categories</span>
          </div>
        </div>
      </section>

      <div className="toolbar">
        <input
          className="search"
          type="search"
          placeholder="Search topics…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search topics"
        />
        <div className="chips" role="tablist" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${category === c ? 'chip-on' : ''}`}
              onClick={() => setCategory(c)}
              role="tab"
              aria-selected={category === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map((t) => (
          <button key={t.id} className="card" onClick={() => onSelect(t.id)}>
            <div className="card-top">
              <span
                className="cat"
                style={{ '--cat': categoryColor(t.category) }}
              >
                {t.category}
              </span>
              <StatusPill status={t.status} />
            </div>
            <h3 className="card-title">{t.title}</h3>
            <p className="card-headline">{t.headline}</p>
            <div className="card-meta">
              <span>{t.respondents.toLocaleString()} responses</span>
              <span className="sep">·</span>
              <span>{t.region}</span>
              <span className="sep">·</span>
              <span>{formatDate(t.fieldworkEnd)}</span>
            </div>
            <span className="card-cta">View insights →</span>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="empty">No topics match your search.</p>
        )}
      </div>
    </div>
  )
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
