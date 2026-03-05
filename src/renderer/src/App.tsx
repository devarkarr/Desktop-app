import electronLogo from './assets/electron.svg'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchPosts = async () => {
  return await window.api.getPosts()
}

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
  console.log(data, isLoading)

  const [versions] = useState(window?.versions)
  console.log(versions)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePing = async () => {
    const response = await window.electronAPI.pong()
    alert(response) // "pong from main process"
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRead = async () => {
    const content = await window.electronAPI.readFile(
      '/Users/xsphere/Desktop/Electron/CamScanner 28-02-2026 16.51.pdf'
    )
    console.log(content)
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <button className=" py-2 px-3 rounded bg-indigo-500 text-white m-3" onClick={handlePing}>
          hello
        </button>

        <button onClick={handleRead} className=" py-2 px-3 rounded bg-indigo-500 text-white m-3">
          Ping Main Process
        </button>
        <Link to="/login">
          <button className=" py-2 px-3 rounded bg-indigo-500 text-white m-3">Login</button>
        </Link>
      </div>
      <img alt="logo" className="size-20" src={electronLogo} />

      <div className="action">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
      <ul>
        {data?.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
