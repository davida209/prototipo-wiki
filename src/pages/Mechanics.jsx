import { mechanics } from '../data/mockData.js'
import './Mechanics.css'

export default function Mechanics() {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Wiki</p>
        <h1>Mecánicas</h1>
      </header>

      <div className="page-content">
        {mechanics.map((item, index) => (
          <div key={item.id}>
            <div className="mechanic-entry">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {index < mechanics.length - 1 && <div className="rule" />}
          </div>
        ))}
      </div>
    </div>
  )
}
