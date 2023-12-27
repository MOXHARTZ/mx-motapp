import { useEffect, useRef, useState, useCallback, forwardRef } from 'react'
import { isEnvBrowser } from './utils/misc'
import './themes.css'
import { usePhoneCombine } from './hooks/usePhoneCombine'

function App() {
  const [transformScale, setTransformScale] = useState(1)
  const deviceRef = useRef<HTMLDivElement>(null)
  const resizeHandler = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const deviceWidth = deviceRef.current?.offsetWidth ?? 375;
    const deviceHeight = deviceRef.current?.offsetHeight ?? 812;
    const scale = Math.min(width / deviceWidth, height / deviceHeight) * 0.85
    setTransformScale(scale);
  }, [deviceRef])

  useEffect(() => {
    if (!isEnvBrowser()) return;
    document.body.style.visibility = "visible";
    document.body.style.display = "block";
    document.body.style.backgroundColor = "black";
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  usePhoneCombine()

  return (
    <DeviceProvider ref={deviceRef} style={{ transform: `scale(${transformScale})` }}>
      <div id="application">
        <h3 className="header">Modals</h3>
        <div className="wrapper">
          <button>Selector</button>
          <button>Selector (async)</button>
          <button>Prompt</button>
          <button>Prompt (async)</button>
        </div>
        <h3 className="header">Take & Request</h3>
        <div className="wrapper">
          <button>Take image from camera</button>
          <button>Take image from gallery</button>
          <button>Take gif</button>
          <button>Request Money</button>
        </div>
        <h3 className="header">Notification</h3>
        <div className="wrapper">
          <button>Push notification</button>
          <button>Push notification (old)</button>
        </div>
        <h3 className="header">Others</h3>
        <div className="wrapper">
          <button>Open a image</button>
          <button>Rotate Phone</button>
          <button>Call</button>
        </div>
      </div>
    </DeviceProvider>
  )
}

type DeviceProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const DeviceProvider = forwardRef<HTMLDivElement, DeviceProps>(({ children, style }, ref) => {
  return isEnvBrowser() ? <section id="phone-device" ref={ref} className='absolute right-[3%] inline p-6 rounded-[60px] w-[42rem] h-[88.5rem] bottom-0 box-content origin-bottom-right mb-8 select-none' style={style}>{children}</section> : children
})

export default App
