export const metadata = {
    title: 'About > Mission ',
    description: 'About | Mission Page',
  }

export default function MissionLayout({children}){
    return(
        <div>
            <nav>Mission Nav</nav>
            {children}
        </div>
    )
}