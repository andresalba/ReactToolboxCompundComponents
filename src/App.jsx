import './App.css'
import Principal from './components/Principal'

function App() {

  return (
    <>
      <Principal>
        <Principal.Titulo1 title1='title1'/>
        <Principal.Titulo2 title2='title2'/>
        <Principal.Titulo3 title3='title3'/>
        <Principal.Texto1 text1='text1'>children text1</Principal.Texto1>
        <Principal.Imagen source='/eagle.png'/>
        <Principal.Texto1 text1='text2'>children text2</Principal.Texto1>
      </Principal>
    </>
  )
}

export default App
