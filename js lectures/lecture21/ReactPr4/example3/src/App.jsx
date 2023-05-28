import './components/Post.css'
import Post from './components/Post'

function App() {
  return (
    <main className="text">
      <Post author="Tony" body="Iron Man"/>
      <br/>
      <Post author="Steve" body="Captain America" />
      <br/>
      <Post author="Bruce" body="Incredible Hulk"/>
      <br/>
      <Post author="Thor" body="God Of Thunder"/>
      <br/>
    </main>
  )
}

export default App
