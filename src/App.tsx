import * as Tone from 'tone'
import { createStore } from 'solid-js/store'
import { Component, createEffect, createSignal, onMount, Show } from "solid-js"
import { TbBrandStackoverflow, TbCircleDashed, TbCircleDot, TbCircleDotted, TbMoon, TbSun} from 'solid-icons/tb'
import { FaSolidDrum } from 'solid-icons/fa'
import A1 from './audio/instruments/qarmon/A1.mp3'
import As1 from './audio/instruments/qarmon/As1.mp3'
import A2 from './audio/instruments/qarmon/A2.mp3'
import As2 from './audio/instruments/qarmon/As2.mp3'
import A3 from './audio/instruments/qarmon/A3.mp3'
import As3 from './audio/instruments/qarmon/As3.mp3'
import A4 from './audio/instruments/qarmon/A4.mp3'
import As4 from './audio/instruments/qarmon/As4.mp3'
import B1 from './audio/instruments/qarmon/B1.mp3'
import B2 from './audio/instruments/qarmon/B2.mp3'
import B3 from './audio/instruments/qarmon/B3.mp3'
import B4 from './audio/instruments/qarmon/B4.mp3'
import C1 from './audio/instruments/qarmon/C1.mp3'
import Cs1 from './audio/instruments/qarmon/Cs1.mp3'
import C2 from './audio/instruments/qarmon/C2.mp3'
import Cs2 from './audio/instruments/qarmon/Cs2.mp3'
import C3 from './audio/instruments/qarmon/C3.mp3'
import Cs3 from './audio/instruments/qarmon/Cs3.mp3'
import C4 from './audio/instruments/qarmon/C4.mp3'
import Cs4 from './audio/instruments/qarmon/Cs4.mp3'
import D1 from './audio/instruments/qarmon/D1.mp3'
import Ds1 from './audio/instruments/qarmon/Ds1.mp3'
import D2 from './audio/instruments/qarmon/D2.mp3'
import Ds2 from './audio/instruments/qarmon/Ds2.mp3'
import D3 from './audio/instruments/qarmon/D3.mp3'
import Ds3 from './audio/instruments/qarmon/Ds3.mp3'
import D4 from './audio/instruments/qarmon/D4.mp3'
import Ds4 from './audio/instruments/qarmon/Ds4.mp3'
import E1 from './audio/instruments/qarmon/E1.mp3'
import E2 from './audio/instruments/qarmon/E2.mp3'
import E3 from './audio/instruments/qarmon/E3.mp3'
import E4 from './audio/instruments/qarmon/E4.mp3'
import F1 from './audio/instruments/qarmon/F1.mp3'
import Fs1 from './audio/instruments/qarmon/Fs1.mp3'
import F2 from './audio/instruments/qarmon/F2.mp3'
import Fs2 from './audio/instruments/qarmon/Fs2.mp3'
import F3 from './audio/instruments/qarmon/F3.mp3'
import Fs3 from './audio/instruments/qarmon/Fs3.mp3'
import F4 from './audio/instruments/qarmon/F4.mp3'
import Fs4 from './audio/instruments/qarmon/Fs4.mp3'
import G1 from './audio/instruments/qarmon/G1.mp3'
import Gs1 from './audio/instruments/qarmon/Gs1.mp3'
import G2 from './audio/instruments/qarmon/G2.mp3'
import Gs2 from './audio/instruments/qarmon/Gs2.mp3'
import G3 from './audio/instruments/qarmon/G3.mp3'
import Gs3 from './audio/instruments/qarmon/Gs3.mp3'
import G4 from './audio/instruments/qarmon/G4.mp3'
import Gs4 from './audio/instruments/qarmon/Gs4.mp3'
import NagaraRitm from './audio/instruments/nagara/ritm2.mp3'
import QarmonIfa from './audio/instruments/qarmon/ifa.ogg'
import DarkyImg from './images/darky.jpeg'
import SnowyImg from './images/snowy.jpeg'


const NOTE_MAP = {
  // "C1": C1, 
  // "C#1": Cs1, 
  // "D1": D1, 
  // "D#1": Ds1, 
  // "E1": E1, 
  // "F1": F1, 
  // "F#1": Fs1, 
  // "G1": G1, 
  // "G#1": Gs1, 
  // "A1": A1, 
  // "A#1": As1, 
  // "B1": B1,

  "C2": C2, 
  "C#2": Cs2, 
  "D2": D2, 
  "D#2": Ds2, 
  "E2": E2, 
  "F2": F2, 
  "F#2": Fs2, 
  "G2": G2, 
  "G#2": Gs2, 
  "A2": A2, 
  "A#2": As2, 
  "B2": B2,

  "C3": C3, 
  "C#3": Cs3, 
  "D3": D3, 
  "D#3": Ds3, 
  "E3": E3, 
  "F3": F3, 
  "F#3": Fs3, 
  "G3": G3, 
  "G#3": Gs3, 
  "A3": A3, 
  "A#3": As3, 
  "B3": B3,
  
  "C4": C4, 
  "C#4": Cs4, 
  "D4": D4, 
  "D#4": Ds4, 
  "E4": E4, 
  "F4": F4, 
  // "F#4": Fs4, 
  "G4": G4, 
  "G#4": Gs4, 
  "A4": A4, 
  "A#4": As4, 
  "B4": B4,
}

const BASE_OCTAVE = 1

const KEY_MAP = {
  "Tab": "C"                    + (BASE_OCTAVE + 1),
            "1": "C#"           + (BASE_OCTAVE + 1),
  "q": "D"                      + (BASE_OCTAVE + 1),
            "2": "D#"           + (BASE_OCTAVE + 1),
  "w": "E"                      + (BASE_OCTAVE + 1),
  "e": "F"                      + (BASE_OCTAVE + 1),
            "4": "F#"           + (BASE_OCTAVE + 1),
  "r": "G"                      + (BASE_OCTAVE + 1),
            "5": "G#"           + (BASE_OCTAVE + 1),
  "t": "A"                      + (BASE_OCTAVE + 1),
            "6": "A#"           + (BASE_OCTAVE + 1),
  "y": "B"                      + (BASE_OCTAVE + 1),


  "u": "C"                      + (BASE_OCTAVE + 2),
            "8": "C#"           + (BASE_OCTAVE + 2),
  "i": "D"                      + (BASE_OCTAVE + 2),
            "9": "D#"           + (BASE_OCTAVE + 2),
  "o": "E"                      + (BASE_OCTAVE + 2),
  "p": "F"                      + (BASE_OCTAVE + 2),
            "-": "F#"           + (BASE_OCTAVE + 2),
  "[": "G"                      + (BASE_OCTAVE + 2),
            "=": "G#"           + (BASE_OCTAVE + 2),
  "]": "A"                      + (BASE_OCTAVE + 2),
            "Backspace": "A#"   + (BASE_OCTAVE + 2),
  "\\": "B"                     + (BASE_OCTAVE + 2),

  "v": "C"                      + (BASE_OCTAVE + 3),
            "g": "C#"           + (BASE_OCTAVE + 3),
  "b": "D"                      + (BASE_OCTAVE + 3),
            "h": "D#"           + (BASE_OCTAVE + 3),
  "n": "E"                      + (BASE_OCTAVE + 3),
  "m": "F"                      + (BASE_OCTAVE + 3),
            "k": "F#"           + (BASE_OCTAVE + 3),
  ",": "G"                      + (BASE_OCTAVE + 3),
            "l": "G#"           + (BASE_OCTAVE + 3),
  ".": "A"                      + (BASE_OCTAVE + 3),
            ";": "A#"           + (BASE_OCTAVE + 3),
  "/": "B"                      + (BASE_OCTAVE + 3),
}

const MIN_VOLUME_DB = -36
const MAX_VOLUME_DB = 30
const VOLUME_STEP_DB = 2
const VOLUME_DEFAULT_DB = -10

const SHORT_DURATION = 0.3

interface Config { 
  volume: number,
  strain: boolean,
  nagara: boolean,
  qarmon: boolean
}

const [config, setConfig] = createStore<Config>({ 
  volume: VOLUME_DEFAULT_DB,
  strain: true, 
  nagara: false,
  qarmon: false
})


const [isStarted, setStarted] = createSignal(false)
const [isLoaded, setLoaded] = createSignal(false)
const isReady = () => isStarted() && isLoaded()

let qarmonSampler: Tone.Sampler
let isMouseDown = false
let keyboardRef: HTMLDivElement
let mouseTargetRef: HTMLButtonElement
let buttonMap: Record<string, HTMLButtonElement> = {}
let nagaraPlayer: Tone.Player
let qarmonPlayer: Tone.Player

function start() {
  setStarted(true)
  Tone.start()
  qarmonSampler = new Tone.Sampler({ urls: NOTE_MAP }).toDestination()
  nagaraPlayer = new Tone.Player(NagaraRitm).toDestination()
  qarmonPlayer = new Tone.Player(QarmonIfa).toDestination()
  Tone.loaded().then(() => setLoaded(true))
  return true
}

function press(button: HTMLButtonElement) {
  mouseTargetRef = button
  button.dataset.pressed = 'true'
  const noteName = button.dataset.noteName as string
  if (config.strain) {
    qarmonSampler.triggerAttack(noteName, Tone.now() - 1, 1)
  } else {
    qarmonSampler.triggerAttackRelease(noteName, SHORT_DURATION)
  }
}

function unpress(button: HTMLButtonElement) {
  button.dataset.pressed = 'false'
  const noteName = button.dataset.noteName as string
  if (config.strain) {
    qarmonSampler.triggerRelease(noteName)
  } 
}

function handleMouseDown(event: Event) {
  isMouseDown = true
  if (event.target instanceof HTMLButtonElement) {
    press(event.target)
  }
}

function handleMouseUp(event: Event) {
  isMouseDown = false
  if (event.target instanceof HTMLButtonElement) {
    unpress(event.target)
  }
}

function handleMouseMove(event: MouseEvent | TouchEvent) {
  if (isMouseDown) {
    let pointerX = -1
    let pointerY = -1

    if (event instanceof TouchEvent) {
      var touch = event.touches[0] || event.changedTouches[0]
      pointerX = touch.pageX
      pointerY = touch.pageY
    } else {
      pointerX = event.clientX
      pointerY = event.clientY
    }

    const target = document.elementFromPoint(pointerX, pointerY)

    if (mouseTargetRef != target && target instanceof HTMLButtonElement) {
      press(target)
    } 
  }
}

function handleMouseLeave(event: MouseEvent) {
  const target = event.target
  if (isMouseDown && target instanceof HTMLButtonElement) {
    unpress(target) 
  }
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.repeat) return;

  const keyName = event.key as keyof typeof KEY_MAP
  const noteName = KEY_MAP[keyName]

  if (noteName) {
    console.log('key', noteName)
    press(buttonMap[noteName])
  }

  event.preventDefault()
}

function handleKeyUp(event: KeyboardEvent) {
  if (event.repeat) return;

  const keyName = event.key as keyof typeof KEY_MAP
  const noteName = KEY_MAP[keyName]
  
  if (noteName) {
    unpress(buttonMap[noteName])
  }

  event.preventDefault()
}

function initKeyboard() {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('keyup', handleKeyUp)
}

function initKeyboardButtonRefMap() {
  for (const element of Array.from(keyboardRef?.children || [])) {
    if (element instanceof HTMLButtonElement) {
      const noteName = element.dataset.noteName
      if (noteName) {
        buttonMap[noteName] = element
      }
    }
  }
}

const QarmonInput: Component = () => {
  function handleClick() {
    setConfig("qarmon", x => {
      const newValue = !x
      qarmonPlayer[newValue ? 'start' : 'stop']()
      return newValue
    })
  }
  return (
    <button class="btn btn-ghost" onclick={handleClick}>
      <TbBrandStackoverflow class={`w-7 h-7 transition-all ${config.qarmon ? 'stroke-error' : 'stroke-base-content'}`}/>
    </button>
  )
}

const StrainInput: Component = () => {
  function handleInput() {
    setConfig("strain", x => !x)
  }
  return (
    <label class="btn btn-ghost swap swap-rotate">
      <input type="checkbox" oninput={handleInput}/>
      <TbCircleDashed class="stroke-base-content swap-off w-7 h-7"/>
      <TbCircleDotted class="stroke-base-content swap-on w-7 h-7"/>
    </label>
  )
}

const VolumeInput: Component = () => {
  const isMaxVolume = () => config.volume > VOLUME_DEFAULT_DB

  function handleInput(event: InputEvent) {
    setConfig("volume", () => {
      const newValue = +(event.currentTarget as HTMLInputElement).value
      qarmonSampler.volume.value = newValue
      nagaraPlayer.volume.value = newValue
      qarmonPlayer.volume.value = newValue
      return newValue
    })
  }

  return (
    <div class="z-30 absolute bottom-1/2 left-1/2 w-[calc(var(--key-height)*0.95)] -translate-x-1/2 translate-y-1/2 rotate-[-90deg] flex gap-5">
      <input 
        type="range" 
        tabindex={-1}
        min={MIN_VOLUME_DB}
        max={MAX_VOLUME_DB}
        value={config.volume}
        step={VOLUME_STEP_DB}
        class="range range-sm w-full"
        oninput={handleInput}
      />
      <div class="relative">
        <span class={`absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 ${isMaxVolume() ? 'text-error' : 'text-base-content'}`}>
          {100 - config.volume - VOLUME_DEFAULT_DB}
        </span>
      </div>
    </div>
  )
}

const NagaraInput: Component = () => {
  function handleClick() {
    setConfig("nagara", x => {
      const newValue = !x
      nagaraPlayer[newValue ? "start" : "stop"]()
      return newValue
    })
  }

  return (
    <button class="btn btn-ghost" onclick={handleClick}>
      <FaSolidDrum class={`w-7 h-7 transition-all ${config.nagara ? 'fill-error' : 'fill-base-content'}`} />
    </button>
  )
}

const DarkModeToggler: Component = () => {
  const [isDarkMode, setIsDarkMode] = createSignal(false)

  createEffect(() => {
    const isDark = isDarkMode()
    document.documentElement.setAttribute('data-theme', isDark ? 'coffee' : 'winter')
    document.body.style.backgroundImage = `url("${isDark ? DarkyImg : SnowyImg }")`
  })

  return (
    <label class="btn btn-ghost swap swap-rotate">
      <input type="checkbox" onchange={() => setIsDarkMode(x => !x)}/>
      <TbSun class="stroke-base-content swap-on w-7 h-7"/>
      <TbMoon class="stroke-base-content swap-off w-7 h-7"/>
    </label>
  )
}

const App: Component = () => {

  start()

  onMount(() => {
    initKeyboard()
    initKeyboardButtonRefMap()
  })

  return (
    <>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class={`lds-roller ${!isReady() ? 'opacity-100' : 'opacity-0' }`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
      <div class={`shadow-2xl select-none bg-base-200 flex flex-col gap-10 rounded-3xl border-neutral border pr-10 pl-14 py-10 transition-all ${isReady() ? 'opacity-100' : 'opacity-0' }`}>
        <div class="flex justify-between items-center">
          <div class="flex gap-10 items-center">
            <h1 class="text-5xl text-base-content font-bold font-cursive">Sərgizator</h1>
          </div>
          <div class="flex gap-5">
            <QarmonInput />
            <NagaraInput />
            <StrainInput />
            <DarkModeToggler />
          </div>
        </div>
        <div class="flex gap-10">
          <div 
            ref={keyboardRef}
            class="h-full relative" 
            onmousedown={handleMouseDown} 
            onmouseup={handleMouseUp}
            onmousemove={handleMouseMove}
            ontouchmove={handleMouseMove}
            onmouseout={handleMouseLeave}
          >
            {Object.keys(NOTE_MAP).map(noteName => (
              <button 
                class="key"
                tabindex={-1}
                data-pressed="false"
                data-note-name={noteName}
                classList={{ 'key--black' : noteName.includes('#')}} 
              />
            ))}
          </div>
          <div class="relative p-5">
             <VolumeInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default App
