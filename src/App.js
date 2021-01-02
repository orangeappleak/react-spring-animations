import React,{useState} from 'react';
import {useTrail, a} from 'react-spring';


function Trail({children,...props}){
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length,{
    opacity: props.open ? 1 : 0,
    x: props.open ? -500 : 500,
    from: {opacity: 0,x: -500}
  })
  return(
    <div id="text" {...props}>
      {trail.map(({opacity,x},index) => (
        <a.h1 style={{transform: x.interpolate((x) => `translateX(${x}px)`),opacity: opacity.interpolate((opacity) => `${opacity}`)}}>{items[index]}</a.h1>
      ))}
    </div>
  )
}


function App() {
  const [open,set] = useState(true)
  return(
    <Trail open={open} onClick = {() => set((state) => !state)}>
      <span>Lorem</span>
      <span>Isum</span>
      <span>Dolor</span>
      <span>Sit</span>
    </Trail>
  );
}

export default App;
