import { characters } from '../data/mockData.js'
import './Characters.css'

export default function Characters() {
  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">Wiki</p>
        <h1>Personajes</h1>
      </header>

      <div className="page-content">
        {characters.map((character, index) => (
          <div key={character.id}>
            <div className="character-entry">
              <div className="character-heading">
                <h3>{character.name}</h3>
                <span className="character-role">{character.role}</span>
              </div>
              <p>{character.description}</p>
            </div>
            {index < characters.length - 1 && <div className="rule" />}
          </div>
        ))}
      </div>
    </div>
  )
}
