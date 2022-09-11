import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    // @ts-ignore
    app.component((component as any).name, component)
  }
  return component as SFCWithInstall<T>
}
