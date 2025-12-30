import Contact from "./Contact"

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row font-[monospace] text-center md:text-right items-center md:justify-between md:items-end gap-2 w-auto">
      <Contact className=""/>
      <div className="flex flex-col text-[gray]">
        <div>
            © Sutton Fritz, 2025
        </div>
        <div className="underline decoration-dotted">
            last deploy: 2025.12.29,18:21
        </div>
      </div>
    </div>
  )
}

export default Footer