export const getImage = (key: string) => {
    if (key) {
        return process.env.NEXT_PUBLIC_IMAGE + key
    }else{
        return''
    }
}