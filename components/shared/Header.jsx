import MenuToggle from '../miscellaneous/MenuToggle'



export const Header = () =>  {
  return (
    <header className='content pt-6 lg:pt-8'>
      <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-100">
          <div className='focusable inline-flex cursor-help items-center rounded-sm font-semibold transition hover:opacity-60'>
          <span className='font-normal'>@MaadSounds</span>
        </div>
        <MenuToggle />
      </div>
    </header>
  )
}