export const scrollTo = (ref, offset = 0) => {
    window.scrollTo({
        top: ref?.current?.offsetTop - offset,
        behavior: 'smooth' 
    })
    // ref.current?.scrollIntoView({ 
    //     behavior: 'smooth' 
    // });
}