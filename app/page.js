import Button from '@/components/button'

export default function Home() {
  return (
    <main >
      <div className="main-text">Welcome to jokingly! <br /> <br /> It makes your day great</div>
      <div className='display-center'>
       <Button url="/info" text="Explore World of Jokes"/>
      </div>
    </main>
  )
}
