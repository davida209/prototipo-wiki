import { currentShift } from '../data/mockData.js'
import './MyShift.css'

const currencyFormatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
})

export default function MyShift() {
  const { day, totalDays, money, reputation, reputationMax, objectives } = currentShift

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">
          Día {day} de {totalDays}
        </p>
        <h1>Tu turno</h1>
        <div className="day-track">
          {Array.from({ length: totalDays }, (_, index) => {
            const dayNumber = index + 1
            let state = ''
            if (dayNumber < day) state = 'done'
            if (dayNumber === day) state = 'current'
            return <span key={dayNumber} className={`day-segment ${state}`} />
          })}
        </div>
      </header>

      <div className="page-content">
        <div className="stat-row">
          <div className="stat">
            <p className="stat-label">Dinero</p>
            <p className="stat-value">{currencyFormatter.format(money)}</p>
          </div>
          <div className="stat">
            <p className="stat-label">
              Reputación {reputation}/{reputationMax}
            </p>
            <div className="gauge">
              {Array.from({ length: reputationMax }, (_, index) => (
                <span key={index} className={index < reputation ? 'filled' : ''} />
              ))}
            </div>
          </div>
        </div>

        <div className="rule" />

        {objectives.map((objective, index) => {
          const done = objective.current >= objective.target
          const progress = Math.min(100, (objective.current / objective.target) * 100)

          return (
            <div key={objective.id}>
              <div className="objective-row">
                <span className={`checkbox ${done ? 'done' : ''}`} />
                <div className="objective-label">
                  <p className="objective-title">{objective.title}</p>
                  <p className="objective-count">
                    {objective.current} de {objective.target}
                  </p>
                  {!done && (
                    <div className="progressbar">
                      <span style={{ width: `${progress}%` }} />
                    </div>
                  )}
                </div>
              </div>
              {index < objectives.length - 1 && <div className="rule" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
