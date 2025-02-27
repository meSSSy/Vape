const Button = ({label, iconUrl}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
      text-lg leading-none bg-red-500 rounded-full text-white border-red-500 mt-10">
        {label}
        <img src={iconUrl} alt="Right Arrow" className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button