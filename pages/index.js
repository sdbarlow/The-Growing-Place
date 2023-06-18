

export default function Home() {
  return (
    <>
    <video className='z-0' autoPlay muted loop width='100%' height='100%'>
      <source src='/videos/Child-Kids.mp4' type="video/mp4"/>
    </video>
    <div
      className={`bg-red-400 w-screen`} style={{ height: `calc(100vh - 7rem)`}}
    >
      <h1>Home</h1>
    </div>
    </>
  )
}
