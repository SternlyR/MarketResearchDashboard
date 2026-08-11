import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  Legend,
} from 'recharts'
import { SERIES, INK } from '../lib/theme'

function PctTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="tt">
      <div className="tt-label">{label}</div>
      {payload.map((p) => (
        <div className="tt-row" key={p.dataKey}>
          <span className="tt-swatch" style={{ background: p.color || p.fill }} />
          <span className="tt-name">{p.name}</span>
          <span className="tt-val">
            {p.value}%
            {p.payload && p.payload.count != null && payload.length === 1
              ? ` · ${p.payload.count.toLocaleString()} resp.`
              : ''}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Horizontal bar chart for a single- or multi-choice question. */
export function ResultChart({ results }) {
  const height = Math.max(140, results.length * 46 + 24)
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={results}
        layout="vertical"
        margin={{ top: 4, right: 48, bottom: 4, left: 8 }}
        barCategoryGap={10}
      >
        <CartesianGrid horizontal={false} stroke={INK.grid} />
        <XAxis
          type="number"
          domain={[0, 'dataMax']}
          tickFormatter={(v) => `${v}%`}
          stroke={INK.muted}
          tick={{ fill: INK.muted, fontSize: 12 }}
          axisLine={{ stroke: INK.baseline }}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="label"
          width={168}
          stroke={INK.muted}
          tick={{ fill: INK.secondary, fontSize: 13 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={{ fill: 'rgba(11,11,11,0.04)' }} content={<PctTooltip />} />
        <Bar dataKey="value" name="Share" radius={[0, 4, 4, 0]} isAnimationActive={false}>
          {results.map((_, i) => (
            <Cell key={i} fill={SERIES[i % SERIES.length]} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v) => `${v}%`}
            fill={INK.secondary}
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

/** Grouped bar chart for a demographic cross-tab. */
export function BreakdownChart({ rows }) {
  if (!rows || !rows.length) return null
  const seriesKeys = Object.keys(rows[0]).filter((k) => k !== 'segment')
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={rows} margin={{ top: 8, right: 12, bottom: 4, left: 0 }} barGap={2}>
        <CartesianGrid vertical={false} stroke={INK.grid} />
        <XAxis
          dataKey="segment"
          stroke={INK.muted}
          tick={{ fill: INK.secondary, fontSize: 12 }}
          axisLine={{ stroke: INK.baseline }}
          tickLine={false}
        />
        <YAxis
          tickFormatter={(v) => `${v}%`}
          stroke={INK.muted}
          tick={{ fill: INK.muted, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={{ fill: 'rgba(11,11,11,0.04)' }} content={<PctTooltip />} />
        <Legend
          iconType="circle"
          wrapperStyle={{ fontSize: 12, color: INK.secondary, paddingTop: 8 }}
        />
        {seriesKeys.map((key, i) => (
          <Bar
            key={key}
            dataKey={key}
            name={key}
            fill={SERIES[i % SERIES.length]}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
