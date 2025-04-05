import Home from "./components/Home";;

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] w-[100vw] bg-zinc-300 text-black">
      <div className="text-center mb-10 flex flex-col justify-center items-center gap-0">
        <h1 className="font-bold text-[8vw] uppercase text-gray-900 leading-none mt-10">Tarun-AI</h1>
        <p className="text-3xl uppercase text-gray-600 leading-none">Upload your image and see the preview</p>
      </div>
      <Home />
      <div className="text-1xl mt-5 mb-10">powerd by <a href="https://tarunroy004.github.io/myPortfolio/">@tarunkumarroy</a></div>
    </div>
  )
}

export default App