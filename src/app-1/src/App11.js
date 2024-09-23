import React, { useState, useEffect} from "react";


const App11 = () => {

    const [inited, setInited] =useState(false)

    useEffect(() => {

      setTimeout(() => {
        setInited(true)

      }, 100)

    }, [])

    if(!inited) {
      return null
    }

    return (
      <micro-app-app1
        name="app-1-1"
        url="http://localhost:8002/"
        iframe
        router-mode="native"
        baseroute={window.__MICRO_APP_BASE_ROUTE__ + "app-1-1"}
      ></micro-app-app1>
    )
  }

  export default App11