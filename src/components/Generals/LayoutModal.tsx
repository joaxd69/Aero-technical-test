export default function LayoutModal({children}:{children:React.ReactNode}){
    
    return(
        <div className="w-full  fixed h-screen  top-0 left-0 flex justify-center items-center bg-[#121212E6] ">
            {children}
        </div>
    )
}