import { useStorage } from "@vueuse/core";
import { computed } from "vue";

type Store = {
  build?: boolean
  typescript?: 'js' | 'ts'
  componentType?: 're-run' | 'create'
  component?: 'separate' | 'jsx' | 'sfc'
  template?: 'jsx' | 'directive' | 'control-flow' | 'dedicated-components'
  signals?: boolean
  mutable?: boolean
  innovation?: number
  dx?: number
  perf?: number
  popular?: number
}

export const store = useStorage<Store>('store', {})

export const score = computed(() => {
  let reactScore = 0
  let vueScore = 0
  let angularScore = 0
  let svelteScore = 0
  let solidScore = 0
  let preactScore = 0
  if(store.value.build) {
    reactScore++
    vueScore++
    angularScore++
    svelteScore++
    solidScore++
    preactScore++
  } else {
    vueScore++
    reactScore += 0.3 // possible, but has a cost and not that widespread
    preactScore += 0.3 // possible, but has a cost and not that widespread
  }
  if(store.value.typescript) {
    reactScore++
    vueScore++
    angularScore++
    svelteScore++
    solidScore++
    preactScore++
  } else {
    reactScore++
    vueScore++
    svelteScore++
    solidScore++
    preactScore++
  }
  if(store.value.componentType === 're-run') {
    reactScore++
    preactScore++
  } else {
    vueScore++
    angularScore++
    svelteScore++
    solidScore++
    preactScore += 0.5 // signal state can avoid re-render
  }
  switch(store.value.component) {
    case 'separate':
      angularScore++
      vueScore += 0.3 // possible, but has a cost and not that widespread
      break
    case 'jsx':
      reactScore++
      vueScore += 0.8 // possible, not that widespread
      solidScore++
      preactScore++
      break
    case 'sfc':
      vueScore++
      angularScore += 0.8 // not exactly SFC syntax, but achievable with inlining HTML and CSS
      svelteScore++
      break
  }
  switch(store.value.template) {
    case 'jsx':
      reactScore++
      preactScore++
      break
    case 'directive':
      vueScore++
      angularScore += 0.5 // moving away from it with control flow
      break
    case 'control-flow':
      angularScore++
      svelteScore++
      break
    case 'dedicated-components':
      solidScore++
      break
  }
  if(store.value.signals) {
    vueScore++
    angularScore++
    svelteScore++
    solidScore++
    preactScore++
  } else {
    reactScore++
  }
  if(store.value.mutable) {
    vueScore++
    svelteScore++
    preactScore++
    angularScore += 0.5 // moving away from it with signals
  } else {
    reactScore++
    solidScore++
    angularScore++
    preactScore += 0.5 // moving away from it with signals
  }
  if(store.value.dx) {
    reactScore *= (store.value.dx / 100)
    vueScore *= (store.value.dx / 100)
    angularScore *= (store.value.dx / 100)
    svelteScore *= (store.value.dx / 100)
    solidScore *= (store.value.dx / 100)
    preactScore *= (store.value.dx / 100)
  }
  if(store.value.innovation) { // based on my impresion of innovation and stability
    reactScore += (100 - Math.abs(20 - store.value.innovation)) * 0.03
    vueScore += (100 - Math.abs(75 - store.value.innovation)) * 0.03
    angularScore += (100 - Math.abs(90 - store.value.innovation)) * 0.03
    svelteScore += (100 - Math.abs(90 - store.value.innovation)) * 0.03
    solidScore += (100 - Math.abs(40 - store.value.innovation)) * 0.03
    preactScore += (100 - Math.abs(40 - store.value.innovation)) * 0.03
  }
  if(store.value.perf) {
    reactScore += (store.value.perf / 100) * 2
    vueScore += (store.value.perf / 100) * 4
    angularScore += (store.value.perf / 100) * 1.5
    svelteScore += (store.value.perf / 100) * 6
    solidScore += (store.value.perf / 100) * 6
    preactScore += (store.value.perf / 100) * 4
  }
  if(store.value.popular) {
    reactScore += (store.value.popular / 100) * 7
    vueScore += (store.value.popular / 100) * 4
    angularScore += (store.value.popular / 100) * 3
    svelteScore += (store.value.popular / 100) * 1
    solidScore += (store.value.popular / 100) * 0.5
    preactScore += (store.value.popular / 100) * 3
  }
  return [
    { name: 'React', score: reactScore },
    { name: 'Vue', score: vueScore },
    { name: 'Angular', score: angularScore },
    { name: 'Svelte', score: svelteScore },
    { name: 'Preact', score: preactScore },
    { name: 'Solid', score: solidScore },
  ].toSorted((a,b) => b.score - a.score)
})
