import './components/Post.css'
import Post from './components/Post'

function App() {
  return (
    <main className="text">
      <Post author="J K Rowling" body="Harry Potter"/>
      <br/>
      <Post author="Robert Kiyosaki" body="Rich Dad Poor Dad" />
      <br/>
      <Post author="Enid Blyton" body="Famous Five"/>
      <br/>
      <Post author="Stephen King" body="The Shining"/>
      <br/>
      <Post author="Ruskin Bond" body="The Blue Umbrella"/>
      <br/>
      <Post author="R K Narayan" body="Malgudi Days"/>
      <br/>
    </main>
  )
}

export default App
