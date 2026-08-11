import { useRef, useState } from 'react'
import { ResultChart, BreakdownChart } from './Charts'
import { categoryColor } from '../lib/theme'
import { exportNodeToPdf } from '../lib/pdf'

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function TopicDetail({ topic, onBack }) {
  const exportRef = useRef(null)
  const [exporting, setExporting] = useState(false)

  async function handleExport() {
    try {
      setExporting(true)
      // let the button state paint before the heavy canvas work
      await new Promise((r) => setTimeout(r, 30))
      await exportNodeToPdf(
        exportRef.current,
        `HCM-OnePulse-${topic.id}.pdf`,
      )
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Sorry — PDF export failed. See console for details.')
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="detail-page">
      <div className="detail-bar">
        <button className="back" onClick={onBack}>
          ← All topics
        </button>
        <button className="export" onClick={handleExport} disabled={exporting}>
          {exporting ? 'Preparing PDF…' : '⤓ Export key findings (PDF)'}
        </button>
      </div>

      {/* Everything inside exportRef is captured into the PDF */}
      <div ref={exportRef} className="export-region">
        <header className="detail-head">
          <div className="detail-tags">
            <span className="cat" style={{ '--cat': categoryColor(topic.category) }}>
              {topic.category}
            </span>
            <span className={`status ${topic.status === 'In field' ? 'status-live' : 'status-done'}`}>
              {topic.status === 'In field' && <span className="dot" />}
              {topic.status}
            </span>
          </div>
          <h1>{topic.title}</h1>
          <p className="detail-headline">{topic.headline}</p>
          <div className="detail-meta">
            <Meta label="Respondents" value={topic.respondents.toLocaleString()} />
            <Meta label="Region" value={topic.region} />
            <Meta
              label="Fieldwork"
              value={`${formatDate(topic.fieldworkStart)} – ${formatDate(topic.fieldworkEnd)}`}
            />
            <Meta label="Questions" value={String(topic.questions.length)} />
          </div>
          {topic.status === 'In field' && (
            <p className="live-note">
              ⚠ This survey is still in field — results below are interim and will change.
            </p>
          )}
        </header>

        <section className="insights">
          <h2 className="section-title">Key insights</h2>
          <div className="insight-list">
            {topic.insights.map((ins, i) => (
              <div className="insight" key={i}>
                <span className="insight-num">{i + 1}</span>
                <div>
                  <h3>{ins.title}</h3>
                  <p>{ins.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="results">
          <h2 className="section-title">Survey results</h2>
          {topic.questions.map((q) => (
            <div className="question" key={q.id}>
              <div className="question-head">
                <h3>{q.text}</h3>
                <span className="qmeta">
                  {q.type === 'multi' ? 'Select all · ' : ''}
                  {q.totalResponses.toLocaleString()} responses
                </span>
              </div>
              <ResultChart results={q.results} />
              {q.breakdowns?.age && (
                <div className="breakdown">
                  <h4>By age group</h4>
                  <BreakdownChart rows={q.breakdowns.age} />
                </div>
              )}
            </div>
          ))}
        </section>

        <footer className="export-footer">
          Hard Carry Media · OnePulse Research · Generated {formatDate(new Date().toISOString().slice(0, 10))}
        </footer>
      </div>
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div className="meta-item">
      <span className="meta-label">{label}</span>
      <span className="meta-value">{value}</span>
    </div>
  )
}
