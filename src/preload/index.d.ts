import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    electronAPI: {
      pong: () => Promise<string>
      readFile: (path: string) => Promise<unknown>
    }
    versions: {
      node: () => string
      chrome: () => string
      electron: () => string
    }
    api: {
      getPosts: () => Promise<
        {
          userId: number
          id: number
          title: string
          body: string
        }[]
      >
    }
  }
}
