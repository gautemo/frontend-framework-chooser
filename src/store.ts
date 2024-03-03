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
      break
    case 'jsx':
      reactScore++
      vueScore += 0.8 // possible, not that widespread
      solidScore++
      preactScore++
      break
    case 'sfc':
      vueScore++
      angularScore += 0.8 // possible, not that widespread
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
  if(store.value.innovation) { // based on my impresion of innovation and stability
    reactScore += Math.abs(0.2 - store.value.innovation) * 2
    vueScore += Math.abs(0.75 - store.value.innovation) * 2
    angularScore += Math.abs(0.9 - store.value.innovation) * 2
    svelteScore += Math.abs(0.9 - store.value.innovation) * 2
    solidScore += Math.abs(0.4 - store.value.innovation) * 2
    preactScore += Math.abs(0.4 - store.value.innovation) * 2
  }
  if(store.value.dx) {
    reactScore *= store.value.dx
    vueScore *= store.value.dx
    angularScore *= store.value.dx
    svelteScore *= store.value.dx
    solidScore *= store.value.dx
    preactScore *= store.value.dx
  }
  if(store.value.perf) {
    reactScore += store.value.perf * 0.9
    vueScore += store.value.perf * 3
    angularScore += store.value.perf * 0.8
    svelteScore += store.value.perf * 5
    solidScore += store.value.perf * 5
    preactScore += store.value.perf * 4
  }
  if(store.value.popular) {
    reactScore += store.value.popular * 5
    vueScore += store.value.popular * 3
    angularScore += store.value.popular * 3
    svelteScore += store.value.popular * 0.5
    solidScore += store.value.popular * 1
    preactScore += store.value.popular * 2
  }
  return [
    { name: 'React', score: reactScore },
    { name: 'Vue', score: vueScore },
    { name: 'Angular', score: angularScore },
    { name: 'Svelte', score: svelteScore },
    { name: 'Preact', score: preactScore },
    { name: 'Solid', score: solidScore },
  ]
})