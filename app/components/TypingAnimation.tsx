const TypingAnimation = () => {
    return (
        <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-neutral-100 rounded-full animate-bounce'></div>
            <div className='w-3 h-3 bg-neutral-100 rounded-full animate-bounce transition delay-400'></div>
            <div className='w-3 h-3 bg-neutral-100 rounded-full animate-bounce transition delay-600'></div>

        </div>
    )
}
export default TypingAnimation