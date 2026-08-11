import { useEffect, useState } from 'react'
import { topics, getTopic } from './data/topics'
import TopicList from './components/TopicList'
import TopicDetail from './components/TopicDetail'

export default function App() {
  // Simple hash routing so a topic view is linkable/shareable.
  const [route, setRoute] = useState(() => window.location.hash.slice(1))

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.slice(1))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const selected = route ? getTopic(route) : null

  const select = (id) => {
    window.location.hash = id
    window.scrollTo({ top: 0 })
  }
  const back = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      <div className="app-brand">
        <span className="brand-mark">HC</span>
        <span className="brand-name">Hard Carry Media</span>
        <span className="brand-div">/</span>
        <span className="brand-tool">OnePulse Insights</span>
      </div>
      {selected ? (
        <TopicDetail topic={selected} onBack={back} />
      ) : (
        <TopicList topics={topics} onSelect={select} />
      )}
    </div>
  )
}
