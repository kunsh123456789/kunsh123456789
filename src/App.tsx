import { BattleScreen } from './components/screens/BattleScreen'
import { CharacterCreation } from './components/screens/CharacterCreation'
import { DefeatScreen } from './components/screens/DefeatScreen'
import { IntroScreen } from './components/screens/IntroScreen'
import { OverworldScreen } from './components/screens/OverworldScreen'
import { TitleScreen } from './components/screens/TitleScreen'
import { VictoryScreen } from './components/screens/VictoryScreen'
import { useGameStore } from './store/gameStore'

function App() {
  const screen = useGameStore((s) => s.screen)

  switch (screen) {
    case 'title':
      return <TitleScreen />
    case 'intro':
      return <IntroScreen />
    case 'create':
      return <CharacterCreation />
    case 'overworld':
      return <OverworldScreen />
    case 'battle':
      return <BattleScreen />
    case 'victory':
      return <VictoryScreen />
    case 'defeat':
      return <DefeatScreen />
    default:
      return <TitleScreen />
  }
}

export default App
